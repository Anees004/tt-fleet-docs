import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const pointSchema = z.object({
  id: z.string(),
  title: z.string(),
  tease: z.string(),
  body: z.string(),
  icon: z.string().default("spark"),
  tip: z.string().optional(),
  warn: z.boolean().optional(),
  related: z.array(z.string()).optional(),
  image: z.string().nullable().optional(),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    id: z.string(),
    group: z.enum(["start", "setup", "bookings", "more", "reference"]),
    title: z.string(),
    blurb: z.string(),
    badge: z.string().default(""),
    badgeClass: z.string().default(""),
    goal: z.string(),
    image: z.string().nullable(),
    icon: z.string(),
    steps: z.array(z.string()),
    points: z.array(pointSchema).default([]),
  }),
});

export const collections = { guides };
