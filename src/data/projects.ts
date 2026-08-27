import { z } from 'zod';

const TranslationSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const ProjectSchema = z.object({
  id: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()),
  link: z.string().url(),
  repo: z.string().url(),
  translations: z.object({
    en: TranslationSchema,
    es: TranslationSchema,
  }),
});

export type Project = z.infer<typeof ProjectSchema>;

export const projects = z.array(ProjectSchema).parse([
  
]);
