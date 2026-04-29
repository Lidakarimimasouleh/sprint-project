import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  // Figma: 4 scattered cards, each with a company logo, quote, and author name
  fields: [
    defineField({
      name: "author",
      title: "Author Name",
      type: "string",
      description: 'Shown in bold uppercase, e.g. "Marko Stojković"',
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      description: "The testimonial body text.",
    }),
    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: false },
      description: "Shown at the top of the card. Use a transparent-background PNG.",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description:
        "Desktop: 1 = top-left card, 2 = top-right, 3 = bottom-left, 4 = bottom-right.",
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "author", media: "logo" },
    prepare: ({ title, media }) => ({ title: title ?? "Unnamed", media }),
  },
});
