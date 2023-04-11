import React, { useEffect, useState } from 'react';
// import { Card, Row, Item } from '@mui/material';

import { fetchPosts } from 'utils/fetchPosts';
import { dateToString } from 'utils/dateToString';
import {
  Button,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      light: '#7801b7',
      main: '#6400b0',
      dark: '#3900a6',
      contrastText: '#000000',
    },
    secondary: {
      light: '#339c00',
      main: '#4cb000',
      dark: '#5cc00c',
      contrastText: '#ffffff',
    },
  },
});

/****
 * Create JSX Elements Functions
 */

const createTag = (tag: string): JSX.Element => {
  return <div className="tag" key={tag}></div>;
};

const createPost = (post: Post): JSX.Element => {
  return (
    <Grid item>
      <Card
        className="post"
        key={`${post.author}, ${post.title}, ${dateToString(post.date)}`}
        onClick={handlePostClicked}
      >
        <CardContent>
          <h3 className="post__title">{post.title}</h3>
          <p className="post__author">By {post.author}</p>
          <p className="post__date">{dateToString(post.date)}</p>
          <div className="post__tags">{post.tags.map(createTag)}</div>
        </CardContent>
      </Card>
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
  const navigate = useNavigate();

  useEffect(() => {
    // This function will run when page is first initialized and when pageN is updated
    const set = async (): Promise<void> => setPosts(await fetchPosts());
    set().catch((err) => console.log(err));
  }, [pageN]);
  // TODO: Have useEffect run when the last 5th post is in sight

  return (
    <ThemeProvider theme={theme}>
      <Grid className="postspage" direction="row-reverse" container spacing={2}>
        <Grid item className="navbar" xs>
          <div></div>
          <img src="" alt="User Image" />
          <span>{'Username'}</span>
          <div className="navbar__buttons">
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
              onClick={(e) => navigate('create-post')}
            >
              Create Post
            </Button>
            <Button
              variant="contained"
              className="accounts"
              onClick={(e) => navigate('account')}
            >
              Accounts
            </Button>
          </div>
        </Grid>
        <Grid
          className="posts"
          xs={10}
          direction="column"
          container
          spacing={2}
          pt={3}
        >
          {posts.map(createPost)}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
