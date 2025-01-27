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
          "en-US": `Image ${new Date().toISOString()}`,
        },
        description: {
          "en-US": "Uploaded image",
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

    return {
      sys: {
        type: "Link",
        linkType: "Asset",
        id: publishedAsset.sys.id,
      },
    };
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
    const { entryId } = data;

    if (!entryId) {
      return NextResponse.json(
        { error: "Entry ID is required" },
        { status: 400 }
      );
    }

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment("master");
    const entry = await environment.getEntry(entryId);

    // Handle testimonial images if present
    if (data.testimonialImages && Array.isArray(data.testimonialImages)) {
      const assetPromises = data.testimonialImages.map((image: any) =>
        createAssetFromUpload(environment, image.uploadId, image.fileName)
      );

      const assetRefs = await Promise.all(assetPromises);
      entry.fields.testimonialImages = {
        "en-US": assetRefs,
      };
    }
    // Handle single image if present
    else if (data.uploadId && data.fileName) {
      try {
        const assetRef = await createAssetFromUpload(
          environment,
          data.uploadId,
          data.fileName
        );
        entry.fields.image = {
          "en-US": assetRef,
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
        ![
          "image",
          "entryId",
          "uploadId",
          "fileName",
          "testimonialImages",
        ].includes(key) &&
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
