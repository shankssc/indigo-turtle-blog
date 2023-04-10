import React, { useEffect, useState } from 'react';
// import { Card, Row, Item } from '@mui/material';

import { fetchPosts } from 'utils/fetchPosts';
import { dateToString } from 'utils/dateToString';

/****
 * Create JSX Elements Functions
 */

const createTag = (tag: string): JSX.Element => {
  return <div className="tag" key={tag}></div>;
};

const createPost = (post: Post): JSX.Element => {
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

/****
 * Event Handling Functions
 */

// TODO: DekoMoon
const handlePostClicked = (): void => {};

// TODO: Reach
const handleMyPost = (): void => {};

// TODO: Solarized
const handleCreatePost = (): void => {};

// TODO: ?
const handleAccounts = (): void => {};

/****
 * PostsPage
 */

export function PostsPage(): JSX.Element {
  const emptypost: Post[] = [];
  const [pageN, setPageN] = useState(0);
  const [posts, setPosts] = useState(emptypost);

  useEffect(() => {
    // This function will run when page is first initialized and when pageN is updated
    const set = async (): Promise<void> => setPosts(await fetchPosts());
    set().catch((err) => console.log(err));
  }, [pageN]);
  // TODO: Have useEffect run when the last 5th post is in sight

  return (
    <div className="postspage">
      <div className="navbar">
        <img src="" alt="User Image" />
        <span>{'Username'}</span>
        <div className="navbar__buttons">
          <button
            className="my-posts-button"
            onClick={(e) => console.log('implement me')}
          >
            My Posts
          </button>
          <button
            className="create-post"
            onClick={(e) => console.log('implement me')}
          >
            Create Post
          </button>
          <button
            className="accounts"
            onClick={(e) => console.log('implement me')}
          >
            Accounts
          </button>
        </div>
      </div>
      <div className="posts">{posts.map(createPost)}</div>
    </div>
  );
}
