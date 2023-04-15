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

const handlePostClicked = (
  posts: Post[],
  postComps: React.MutableRefObject<HTMLDivElement[]>,
  setPopIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
): void => {
  const uid = postComps.current.filter((el) => el == e.currentTarget)[0].dataset
    .key;
  const post: Post | undefined = posts.filter((post) => post.uid == uid)[0];
  setPopIsOpen(true);
};

export const createPosts = (
  theme: Theme,
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
      onClick={(e) => handlePostClicked(posts, postComps, setPopIsOpen, e)}
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

            {createTags(theme, post.tags)}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ));
};
