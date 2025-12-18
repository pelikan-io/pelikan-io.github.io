import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    twitter_username: z.string().optional(),
    tags: z.string().optional(),
    comments: z.boolean().optional(),
    layout: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.coerce.date(),
  }),
});

const talks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    author: z.string().optional(),
    twitter_username: z.string().optional(),
    event: z.string().optional(),
    date: z.coerce.date().optional(),
    location: z.string().optional(),
    talk_url: z.string().optional(),
    slides_url: z.string().optional(),
    video_url: z.string().optional(),
    talk_duration: z.string().optional(),
    cover: z.string().optional(),
    layout: z.string().optional(),
  }),
});

export const collections = { posts, news, talks };
