import { defineField, defineType } from "sanity";

export const portfolioProject = defineType({
  name: "portfolioProject",
  title: "Portfolio Project",
  type: "document",
  // Figma: 2-column staggered grid, 4 projects
  // Each card: full-bleed image, tag chips overlay, project title + arrow link
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      description: 'e.g. "Surfers Paradise"',
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      description: 'Chip labels overlaid on the image, e.g. ["Social Media", "Photography"]',
    }),
    defineField({
      name: "link",
      title: "Project URL",
      type: "url",
      description: "Where the arrow link points to.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Desktop: 1 = top-left, 2 = top-right (offset), 3 = bottom-left, 4 = bottom-right.",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", media: "image" },
    prepare: ({ title, media }) => ({ title: title ?? "Untitled project", media }),
  },
});
