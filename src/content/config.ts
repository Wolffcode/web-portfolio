import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    link: z.string().url(),
    repo: z.string().url(),
    lang:z.enum(['en', 'es']),
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    draft: z.boolean(),
  })
});

export const collections = { projectsCollection, blogCollection}