import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/pages/projects" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    technologies: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    github: z.string(),
    url: z.string(),
  }),
});

export const collections = { projects };
