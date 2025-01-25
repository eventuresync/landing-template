import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { createClient } from "contentful-management";
import { authOptions } from "../../auth/[...nextauth]/route";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!,
});

async function createAssetFromUpload(
  environment: any,
  uploadId: string,
  fileName: string
) {
  try {
    // Create the asset
    const asset = await environment.createAsset({
      fields: {
        title: {
          "en-US": `Header Image ${new Date().toISOString()}`,
        },
        description: {
          "en-US": "Header profile image",
        },
        file: {
          "en-US": {
            contentType: "image/jpeg",
            fileName: fileName,
            uploadFrom: {
              sys: {
                type: "Link",
                linkType: "Upload",
                id: uploadId,
              },
            },
          },
        },
      },
    });

    // Process and publish the asset
    const processedAsset = await asset.processForAllLocales();
    const publishedAsset = await processedAsset.publish();

    return publishedAsset.sys.id;
  } catch (error) {
    console.error("Error creating asset:", error);
    throw error;
  }
}

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
    const { entryId, uploadId, fileName } = data;

    if (!entryId) {
      return NextResponse.json(
        { error: "Entry ID is required" },
        { status: 400 }
      );
    }

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment("master");
    const entry = await environment.getEntry(entryId);

    // Handle image update if upload ID is provided
    if (uploadId && fileName) {
      try {
        const assetId = await createAssetFromUpload(
          environment,
          uploadId,
          fileName
        );
        entry.fields.image = {
          "en-US": {
            sys: {
              type: "Link",
              linkType: "Asset",
              id: assetId,
            },
          },
        };
      } catch (error) {
        console.error("Error handling image:", error);
        return NextResponse.json(
          { error: "Failed to process image" },
          { status: 500 }
        );
      }
    }

    // Update other fields
    Object.keys(data).forEach((key) => {
      if (
        !["image", "entryId", "uploadId", "fileName"].includes(key) &&
        data[key] !== undefined
      ) {
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
