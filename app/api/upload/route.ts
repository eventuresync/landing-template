import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

async function uploadToContentful(buffer: Buffer) {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
    throw new Error(
      "Missing Contentful configuration in environment variables"
    );
  }

  const response = await fetch(
    `https://upload.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/uploads`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${CONTENTFUL_MANAGEMENT_TOKEN}`,
        "Content-Type": "application/octet-stream",
      },
      body: buffer,
    }
  );

  if (!response.ok) {
    const errorDetails = await response.json();
    throw new Error(
      `Failed to upload to Contentful: ${
        errorDetails.message || response.statusText
      }`
    );
  }

  return response.json();
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json({ error: "Invalid file type" }, { status: 400 });
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadData = await uploadToContentful(buffer);

    return NextResponse.json({ uploadId: uploadData.sys.id });
  } catch (error: any) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: error.message || "Failed to upload file" },
      { status: 500 }
    );
  }
}
