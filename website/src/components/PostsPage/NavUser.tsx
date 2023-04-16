import React from 'react';
import { Button, Grid, Typography, useTheme } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';

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

export const NavUser = ({
  navigate,
  username,
}: {
  navigate: NavigateFunction;
  username: string;
}): JSX.Element => {
  const theme = useTheme();
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
        <Typography color="hsla(0, 100%, 0%, 0.5)">Sign out</Typography>
      </Button>
    </Grid>
  );
};
