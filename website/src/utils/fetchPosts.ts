import { isPost } from './isPost';

import * as posts from 'post-objects.json';

export async function fetchPosts(): Promise<Post[]> {
  // Placeholder for fetching posts from serverside
  const json: unknown = posts;

  if (Array.isArray(json)) {
    console.log(json);
    return json.filter((el: unknown) => isPost(el));
  } else return [];
}
