import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { createClient } from "contentful-management";
import { authOptions } from "../../auth/[...nextauth]/route";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});

export async function PUT(
  request: Request,
  { params }: { params: { sectionId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    const { entryId } = data; // Extraer el ID de entrada del payload

    if (!entryId) {
      return NextResponse.json(
        { error: "Entry ID is required" },
        { status: 400 }
      );
    }

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment("master");

    // Get the entry
    const entry = await environment.getEntry(entryId);

    // Only update fields that are provided in the request
    Object.keys(data).forEach((key) => {
      console.log(data[key], entryId);
      if (data[key] !== undefined && data[key] !== entryId) {
        entry.fields[key] = {
          "en-US": data[key],
        };
      }
    });

    // Save and publish the entry
    const updatedEntry = await entry.update();
    await updatedEntry.publish();

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { error: error.message || "Failed to update content" },
      { status: 500 }
    );
  }
}
