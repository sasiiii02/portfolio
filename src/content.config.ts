import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      impact: z.string().optional(),        // NEW: one-line outcome
      tech: z.array(z.string()),
      status: z.enum(['featured', 'more']),
      type: z.enum(['Professional', 'Personal', 'Academic']).default('Personal'),  // NEW
      order: z.number(),
      image: image().optional(),
      links: z.object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      }),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    current: z.boolean().default(false),
    summary: z.string(),
    stack: z.array(z.string()).default([]),
    highlights: z.array(z.string()),
    order: z.number(),
  }),
});

const certificates = defineCollection({
  loader: file('./src/content/certificates.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    issuer: z.string(),
    date: z.string(),
    description: z.string().optional(),
    url: z.string().url().optional(),
    type: z.enum(['achievement', 'certificate']).default('certificate'),
    order: z.number(),
  }),
});




export const collections = { projects, experience, certificates };