import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  // Figma: 4 services listed vertically on black bg
  // Each row: [ number ] label + divider, then name (large italic bold) | description | 151×151 image
  fields: [
    defineField({
      name: "title",
      title: "Service Name",
      type: "string",
      description: 'Shown large + italic, e.g. "Brand Discovery"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Short paragraph shown to the right of the title on desktop.",
    }),
    defineField({
      name: "image",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      description: "151 × 151 px square shown at the far right of the row.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "1 = Brand Discovery, 2 = Web Design & Dev, etc.",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", media: "image" },
    prepare: ({ title, media }) => ({ title: title ?? "Untitled service", media }),
  },
});
