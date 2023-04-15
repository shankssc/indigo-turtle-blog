import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Modal,
  Popover,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { dateToString } from 'utils/dateToString';
import { createTags } from './createTags';

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
  padding: 2,
};

const post = {
  author: 'TurtlesAreTheBest3324',
  uid: '2425124505927442',
  date: {
    year: '2023',
    month: '05',
    day: '30',
    hr: '12',
    min: '05',
    sec: '33',
  },
  title: "Turtles are great, here's a reason why",
  content: 'There are green ones, but the indigo ones are cooler.',
  tags: ['politics', 'personal'],
};

export const PostOverlay = ({
  popIsOpen,
  setPopIsOpen,
  posts,
}: {
  popIsOpen: boolean;
  setPopIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  posts: Post[];
}): JSX.Element => {
  const theme = useTheme();
  const [moreOpen, setMoreOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleMoreClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setMoreOpen(true);
    setAnchorEl(e.currentTarget);
  };

  return (
    <Modal open={popIsOpen} onClose={() => setPopIsOpen(false)}>
      <Grid container sx={OVERLAY_STYLE} direction="column">
        <Grid item xs={0.75}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography variant="h4">{post.title}</Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={handleMoreClicked}>
                More
              </Button>
              <Popover
                open={moreOpen}
                onClose={() => setMoreOpen(false)}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
              >
                <ButtonGroup variant="text" orientation="vertical">
                  <Button variant="contained">Edit</Button>
                  <Button variant="contained">Delete</Button>
                </ButtonGroup>
              </Popover>
            </Grid>
          </Grid>
          <Divider sx={{ borderWidth: 1, borderColor: 'black' }} />
        </Grid>
        <Grid item xs={0.5}>
          <Grid container direction="row">
            <Grid item>{post.author}</Grid>
            <Grid item>{dateToString(post.date)}</Grid>
            <Grid item>
              <Grid container>{createTags(theme, post.tags)}</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          {post.content}
        </Grid>
      </Grid>
    </Modal>
  );
};
