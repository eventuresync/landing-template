import { createClient } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID! || "i8i7ymflqy95",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN! || "KTULXRsqQYVR3t9OzCDAuMfKYabnmbiXaoS6oH53Fl8",
});

const managementClient = createManagementClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN! || "KTULXRsqQYVR3t9OzCDAuMfKYabnmbiXaoS6oH53Fl8",
});

export async function getEntry(entryId: string) {
  try {
    const entry = await client.getEntry(entryId);
    return entry;
  } catch (error) {
    console.error('Error fetching entry:', error);
    throw error;
  }
}

export async function updateEntry(entryId: string, fields: any) {
  try {
    const space = await managementClient.getSpace(process.env.CONTENTFUL_SPACE_ID!);
    const environment = await space.getEnvironment('master');
    const entry = await environment.getEntry(entryId);

    entry.fields = {
      ...entry.fields,
      ...fields,
    };

    const updatedEntry = await entry.update();
    await updatedEntry.publish();

    return updatedEntry;
  } catch (error) {
    console.error('Error updating entry:', error);
    throw error;
  }
}