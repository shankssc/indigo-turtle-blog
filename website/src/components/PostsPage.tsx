import React, { useEffect, useState } from 'react';
// import { Card, Row, Item } from '@mui/material';

import { fetchPosts } from 'utils/fetchPosts';

const createPost = (post: Post): JSX.Element => {
  return <div></div>;
};

const emptypost: Post[] = [];

export function PostsPage(): JSX.Element {
  const [posts, setPosts] = useState(emptypost);
  useEffect(() => {
    const set = async (): Promise<void> => setPosts(await fetchPosts());
    set().catch((err) => console.log(err));
  });

  return (
    <div className="postspage">
      <div className="navbar"></div>
      <div className="posts"></div>
    </div>
  );
}
