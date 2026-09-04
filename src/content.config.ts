import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const column = defineCollection({
  loader: glob({ base: './src/content/column', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    num:         z.string(),
    title:       z.string(),
    author:      z.string(),
    lang:        z.enum(['ja', 'en']).default('ja'),
    genre:       z.enum(['文学','思想','漫画','映画','音楽','美術','建築','デザイン','その他']),
    country:     z.string(),
    era:         z.enum(['古代','中世','近世','近代','現代']),
    yearSort:    z.number(),
    yearLabel:   z.string(),
    keywords:    z.array(z.string()).default([]),
    date:        z.string(),
    description: z.string(),
    image:       z.string().optional(),
    refs: z.array(z.object({
      text: z.string(),
      url:  z.string().optional(),
    })).default([]),
  }),
});

const least = defineCollection({
  loader: glob({ base: './src/content/least', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    num:         z.string(),
    title:       z.string(),
    date:        z.string(),
    description: z.string(),
    refs: z.array(z.object({
      text: z.string(),
      url:  z.string().optional(),
      note: z.string().optional(),  // ← 追加
    })).default([]),
  }),
});

export const collections = { column, least };