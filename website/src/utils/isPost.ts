import { z } from 'zod';

export function isPost(obj: unknown): obj is Post {
  const postSchema = z.object({
    author: z.string(),
    title: z.string(),
    content: z.string(),
    date: z.object({
      year: z.string(),
      month: z.string(),
      day: z.string(),
      hr: z.string(),
      min: z.string(),
      sec: z.string(),
    }),
    tags: z.string().array(),
  });

  return postSchema.safeParse(obj).success;
}
