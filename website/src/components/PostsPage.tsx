import React, { useEffect, useState } from 'react';
// import { Card, Row, Item } from '@mui/material';

import { fetchPosts } from 'utils/fetchPosts';
import { dateToString } from 'utils/dateToString';

const createTag = (tag: string): JSX.Element => {
  return <div className="tag" key={tag}></div>;
};

const createPost = (post: Post): JSX.Element => {
  console.log('why no work');
  return (
    <div
      className="post"
      key={`${post.author}, ${post.title}, ${dateToString(post.date)}`}
      onClick={() => console.log('implement')}
    >
      <h3 className="post__title">{post.title}</h3>
      <p className="post__author">By {post.author}</p>
      <p className="post__date">{dateToString(post.date)}</p>
      <div className="post__tags">{post.tags.map(createTag)}</div>
    </div>
  );
};

export function PostsPage(): JSX.Element {
  const emptypost: Post[] = [];
  const [pageN, setPageN] = useState(0);
  const [posts, setPosts] = useState(emptypost);

  useEffect(() => {
    const set = async (): Promise<void> => setPosts(await fetchPosts());
    set().catch((err) => console.log(err));
  }, [pageN]); // TODO: Have useEffect run when the last 5th post is in sight

  return (
    <div className="postspage">
      <div className="navbar"></div>
      <div className="posts">{posts.map(createPost)}</div>
    </div>
  );
}
