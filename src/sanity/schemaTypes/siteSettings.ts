import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    // ── Hero ─────────────────────────────────────────────
    defineField({
      name: "heroLabel",
      title: "Hero — Label",
      type: "string",
      description: 'Shown above the name, e.g. "Hello i\'m"',
    }),
    defineField({
      name: "heroName",
      title: "Hero — Name",
      type: "string",
      description: 'Large heading, e.g. "Harvey Specter"',
    }),
    defineField({
      name: "heroDescription",
      title: "Hero — Description",
      type: "text",
      rows: 3,
      description: "Short studio description shown in the hero.",
    }),
    defineField({
      name: "heroBg",
      title: "Hero — Background Image",
      type: "image",
      options: { hotspot: true },
    }),

    // ── Intro / 001 ───────────────────────────────────────
    defineField({
      name: "introYearsLabel",
      title: "Intro — Years Label",
      type: "string",
      description: 'e.g. "8+ years in industry"',
    }),
    defineField({
      name: "introLines",
      title: "Intro — Tagline Lines",
      type: "array",
      of: [{ type: "string" }],
      description:
        'Each entry is one staggered line, e.g. ["A creative director /", "Photographer", "Born & raised", "on the south side", "of chicago."]',
    }),
    defineField({
      name: "introTag",
      title: "Intro — Tag",
      type: "string",
      description: 'Small label at the bottom, e.g. "creative freelancer"',
    }),

    // ── About / 002 ───────────────────────────────────────
    defineField({
      name: "aboutParagraph1",
      title: "About — Paragraph 1",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "aboutParagraph2",
      title: "About — Paragraph 2",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "aboutImage",
      title: "About — Portrait Image",
      type: "image",
      options: { hotspot: true },
    }),

    // ── Footer ────────────────────────────────────────────
    defineField({
      name: "footerCta",
      title: "Footer — CTA Text",
      type: "string",
      description: 'e.g. "Have a project in mind?"',
    }),
    defineField({
      name: "socialFacebook",
      title: "Social — Facebook URL",
      type: "url",
    }),
    defineField({
      name: "socialInstagram",
      title: "Social — Instagram URL",
      type: "url",
    }),
    defineField({
      name: "socialXcom",
      title: "Social — X.com URL",
      type: "url",
    }),
    defineField({
      name: "socialLinkedin",
      title: "Social — LinkedIn URL",
      type: "url",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
