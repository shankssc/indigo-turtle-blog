import React, { useEffect, useState, useContext } from 'react';

// import { Card, Row, Item } from '@mui/material';

import { fetchPosts } from 'utils/fetchPosts';
import { dateToString } from 'utils/dateToString';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Drawer,
  Grid,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { myContext } from './Context';
/****
 * Create JSX Elements Functions
 */

const createTag = (tag: string): JSX.Element => {
  return <Chip label={tag} key={tag} size="small" style={{ color: '' }} />;
};

const createPost = (post: Post): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Card
        className="post"
        key={`${post.author}, ${post.title}, ${dateToString(post.date)}`}
        onClick={handlePostClicked}
      >
        <CardContent>
          <Typography variant="h6" color="white">
            {post.title}
          </Typography>
          <Grid container direction="row" p={1} gap={2}>
            <Typography variant="body2" color="white">
              {post.author}
            </Typography>
            <Typography variant="body2" color="white">
              {dateToString(post.date)}
            </Typography>
            {post.tags.map(createTag)}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const createNavUser = (
  theme: Theme,
  navigate: NavigateFunction
): JSX.Element => {
  return (
    <Grid
      item
      className="navbar"
      xs
      container
      justifyContent="space-evenly"
      alignItems="center"
      style={{
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <Typography
        variant="h5"
        component="h3"
        color={theme.palette.secondary.contrastText}
      >
        {'Username'}
      </Typography>
      <Grid
        container
        direction="column"
        p={1}
        gap={2}
        className="navbar__buttons"
      >
        <Button
          variant="contained"
          className="my-posts-button"
          onClick={(e) => console.log('implement me')}
          color="secondary"
        >
          My Posts
        </Button>
        <Button
          variant="contained"
          className="create-post"
          onClick={(e) => navigate('../create-post')}
          color="secondary"
        >
          Create Post
        </Button>
        <Button
          variant="contained"
          className="accounts"
          onClick={(e) => navigate('../account')}
          color="secondary"
        >
          Accounts
        </Button>
      </Grid>
      <Button>
        <Typography color="black">Sign out</Typography>
      </Button>
    </Grid>
  );
};

/****
 * Event Handling Functions
 */

// TODO: DekoMoon
const handlePostClicked = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
): void => {
  console.log(e);
};

// TODO: Reach
const handleMyPost = (posts: Post[], user: User, setPosts: React.Dispatch<React.SetStateAction<Post[]>>): void => {
  const usersPosts: Post[] = [];
  posts.map( (element) => {
  if (element.uid === user.uid) {
    usersPosts.push(element);
  }
})
setPosts(usersPosts);
};

/****
 * PostsPage
 */

export function PostsPage(): JSX.Element {
  const emptypost: Post[] = [];
  const [pageN, setPageN] = useState(0);
  const [posts, setPosts] = useState(emptypost);
  const navigate = useNavigate();

  const ctx = useContext(myContext);
  console.log(ctx);

  useEffect(() => {
    // This function will run when page is first initialized and when pageN is updated
    const set = async (): Promise<void> => setPosts(await fetchPosts());
    set().catch((err) => console.log(err));
  }, [pageN]);
  // TODO: Have useEffect run when the last 5th post is in sight

  const theme = useTheme();

  return (
    <Grid
      className="postspage"
      direction="row-reverse"
      container
      gap={2}
      style={{ height: '100vh' }}
    >
      {createNavUser(theme, navigate)}
      <Grid
        className="posts"
        xs={9}
        direction="row"
        container
        spacing={2}
        pt={3}
        style={{
          height: '100vh',
          overflow: 'scroll',
        }}
      >
        {posts.map(createPost)}
      </Grid>
    </Grid>
  );
}
