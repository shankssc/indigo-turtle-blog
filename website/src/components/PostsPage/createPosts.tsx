import React, { useRef } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Theme,
  Typography,
  useTheme,
} from '@mui/material';
import { dateToString } from 'utils/dateToString';
import { createTags } from './createTags';

export const createPosts = (
  theme: Theme,
  posts: Post[],
  postComps: React.MutableRefObject<HTMLDivElement[]>,
  setPopIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setFocusPost: React.Dispatch<React.SetStateAction<Post | null>>
): JSX.Element[] => {
  const handlePostClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const uid = postComps.current.filter((el) => el == e.currentTarget)[0]
      .dataset.key;
    const post: Post | undefined = posts.filter((post) => post.uid == uid)[0];
    if (post === undefined) {
      console.error('ERROR: Post Overlay Unsuccessful. No Post UID matched.');
      setFocusPost(null);
    } else setFocusPost(post);
    setPopIsOpen(true);
  };

  return posts.map((post) => (
    <Grid
      item
      ref={(el) => el != null && postComps.current.push(el)}
      key={post.uid}
      data-key={post.uid}
      onClick={handlePostClicked}
      sx={{ width: '100%' }}
    >
      <Card className="post">
        <CardContent>
          <Typography variant="h6" color={theme.palette.secondary.contrastText}>
            {post.title}
          </Typography>
          <Grid container direction="row" p={1} gap={2}>
            <Typography
              variant="body2"
              color={theme.palette.secondary.contrastText}
            >
              {post.author}
            </Typography>
            <Typography
              variant="body2"
              color={theme.palette.secondary.contrastText}
            >
              {dateToString(post.date)}
            </Typography>
            {createTags(theme, post.tags)}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ));
};
