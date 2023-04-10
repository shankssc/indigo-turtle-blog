import { z } from 'zod';

import { isPost } from './isPost';

import * as posts from 'post-objects.json';

export async function fetchPosts(): Promise<Post[]> {
  // Placeholder for fetching posts from serverside
  const json: unknown = posts;

  const schema = z.object({
    posts: z.unknown().array(),
  });

  const result = schema.safeParse(json);
  // FIXME: Kinda convoluted, might be a good idea to delete isPost and move everything to fetchPosts if no one else needs isPost
  if (result.success) {
    return result.data.posts.filter((el: unknown) => isPost(el)) as Post[];
  } else return [];
}
