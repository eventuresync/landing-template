import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getHeader() {
  const entry = await client.getEntries({
    content_type: "header",
    limit: 1,
  });
  return entry.items[0];
}

export async function getHero() {
  const entry = await client.getEntries({
    content_type: "hero",
    limit: 1,
  });
  return entry.items[0];
}

export async function getReality() {
  const entry = await client.getEntries({
    content_type: "reality",
    limit: 1,
  });
  return entry.items[0];
}

export async function getTestimonials() {
  const entry = await client.getEntries({
    content_type: "testimonials",
    limit: 1,
  });
  return entry.items[0];
}

export async function getAutocuidarse() {
  const entry = await client.getEntries({
    content_type: "program",
    limit: 1,
  });
  return entry.items[0];
}

export async function getVideoTestimonial() {
  const entry = await client.getEntries({
    content_type: "videoTestimonial",
    limit: 1,
  });
  return entry.items[0];
}

export async function getModules() {
  const entries = await client.getEntries({
    content_type: "module",
  });
  return entries.items;
}

export async function getCourseIncludes() {
  const entry = await client.getEntries({
    content_type: "courseIncludes",
    limit: 1,
  });
  return entry.items[0];
}

export async function getAboutPilar() {
  const entry = await client.getEntries({
    content_type: "aboutPilar",
    limit: 1,
  });
  return entry.items[0];
}

export async function getPricing() {
  const entry = await client.getEntries({
    content_type: "pricing",
    include: 2,
  });
  return entry.items[0];
}

export async function getStudentResults() {
  const entry = await client.getEntries({
    content_type: "studentResults",
    limit: 1,
  });
  return entry.items[0];
}

export async function getFAQ() {
  const entry = await client.getEntries({
    content_type: "faq",
    include: 2,
  });
  return entry.items[0];
}

export async function getCallToAction() {
  const entry = await client.getEntries({
    content_type: "callToAction",
    limit: 1,
  });
  return entry.items[0];
}
