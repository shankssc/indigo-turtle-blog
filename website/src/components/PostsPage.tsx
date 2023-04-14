import React, { useEffect, useState, useContext, useRef } from 'react';

// import { Card, Row, Item } from '@mui/material';

import { fetchPosts } from 'utils/fetchPosts';
import { dateToString } from 'utils/dateToString';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Modal,
  Popover,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { myContext } from './Context';

/****
 * Constants
 */

const OVERLAY_STYLE = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  outline: 'none',
};

/****
 * Create JSX Elements Functions
 */

const createTags = (tags: string[]): JSX.Element[] => {
  return tags.map((tag) => (
    <Chip label={tag} key={tag} size="small" style={{ color: '' }} />
  ));
};

const createPosts = (
  posts: Post[],
  postComps: React.MutableRefObject<HTMLDivElement[]>,
  setPopIsOpen: React.Dispatch<React.SetStateAction<boolean>>
): JSX.Element[] => {
  return posts.map((post) => (
    <Grid
      item
      xs={12}
      ref={(el) => el != null && postComps.current.push(el)}
      key={post.uid}
      data-key={post.uid}
      onClick={handlePostClicked.bind(null, postComps, setPopIsOpen)}
    >
      <Card className="post">
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
            {createTags(post.tags)}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ));
};

const createNavUser = (
  theme: Theme,
  navigate: NavigateFunction,
  username: string
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
        {username}
      </Typography>
      <Grid
        item
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

const createNavGuest = (
  theme: Theme,
  navigate: NavigateFunction
): JSX.Element => {
  return (
    <Grid
      item
      className="navbar"
      xs
      container
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor: theme.palette.secondary.dark,
      }}
    >
      <Grid
        container
        direction="column"
        p={1}
        gap={4}
        className="navbar__buttons"
      >
        <Button variant="text">
          <Typography variant="h6" color="white">
            Sign up
          </Typography>
        </Button>
        <Button variant="text">
          <Typography variant="h6" color="white">
            Sign in
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

const createPostOverlay = (
  popIsOpen: boolean,
  setPopIsOpen: React.Dispatch<React.SetStateAction<boolean>>
): JSX.Element => {
  const postTitle = 'Post Title';
  const post: Post = {
    author: 'BittenByDoe',
    uid: '2979427424',
    title: 'How my dog bit me today.',
    content: 'Action action action action action',
    date: {
      year: '2023',
      month: '05',
      day: '23',
      hr: '23',
      min: '55',
      sec: '03',
    },
    tags: ['Science', 'Politics', 'Commons'],
  };
  return (
    <Modal open={popIsOpen} onClose={() => setPopIsOpen(false)}>
      <Grid container sx={OVERLAY_STYLE}>
        <Grid item>{post.title}</Grid>
        <Grid item container>
          <Grid item>{post.author}</Grid>
          <Grid item>{dateToString(post.date)}</Grid>
          <Grid item container>
            {createTags(post.tags)}
          </Grid>
        </Grid>
        <Grid item>{post.content}</Grid>
      </Grid>
    </Modal>
  );
};

/****
 * Event Handling Functions
 */

// TODO: DekoMoon
const handlePostClicked = (
  postComps: React.MutableRefObject<HTMLDivElement[]>,
  setPopIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
): void => {
  console.log(
    postComps.current.filter((el) => el == e.currentTarget)[0].dataset.key
  );
  setPopIsOpen(true);
};

// TODO: Reach
const handleMyPost = (
  posts: Post[],
  user: User,
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>
): void => {
  const usersPosts: Post[] = [];
  posts.forEach((element) => {
    if (element.uid === user.uid) {
      usersPosts.push(element);
    }
  });
  setPosts(usersPosts);
};

/****
 * PostsPage
 */

export function PostsPage(): JSX.Element {
  const postComps = useRef<HTMLDivElement[]>([]);
  const [pageN, setPageN] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [popIsOpen, setPopIsOpen] = useState(false);
  const navigate = useNavigate();

  const ctx = useContext(myContext);

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
      {ctx.username !== undefined
        ? createNavUser(theme, navigate, ctx.username)
        : createNavGuest(theme, navigate)}
      <Grid
        item
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
        {createPosts(posts, postComps, setPopIsOpen)}
      </Grid>
      <Grid>{createPostOverlay(popIsOpen, setPopIsOpen)}</Grid>
    </Grid>
  );
}
