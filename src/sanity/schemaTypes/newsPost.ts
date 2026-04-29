import { defineField, defineType } from "sanity";

export const newsPost = defineType({
  name: "newsPost",
  title: "News Post",
  type: "document",
  // Figma: 3 cards each with a photo, caption text, and "Read more" link
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Internal label — used in the Studio list view.",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 3,
      description: "Short text shown beneath the image.",
    }),
    defineField({
      name: "link",
      title: "Read More URL",
      type: "url",
      description: 'Target of the "Read more →" link.',
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "1 = left card, 2 = centre (offset), 3 = right card.",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", media: "image" },
    prepare: ({ title, media }) => ({ title: title ?? "Untitled post", media }),
  },
});
