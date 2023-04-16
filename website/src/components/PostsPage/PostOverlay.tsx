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
import React, { CSSProperties, useState } from 'react';
import { dateToString } from 'utils/dateToString';
import { createTags } from './createTags';

const OVERLAY_STYLE = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  // height: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  outline: 'none',
  padding: 2,
};

const TEXT_SHIFT_DOWN_STYLE = {
  overflow: 'scroll',
  position: 'relative',
  top: '1px',
};

const CONTENT_STYLE: CSSProperties = {
  maxHeight: '75vh',
  overflow: 'scroll',
  fontSize: '1.1rem',
  whiteSpace: 'pre-line',
};

export const PostOverlay = ({
  popIsOpen,
  setPopIsOpen,
  post,
}: {
  popIsOpen: boolean;
  setPopIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  post: Post;
}): JSX.Element => {
  const handleMoreClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setMoreOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleEditClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {};

  const handleDeleteClicked = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {};

  const theme = useTheme();
  const [moreOpen, setMoreOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  return (
    <Modal open={popIsOpen} onClose={() => setPopIsOpen(false)}>
      <Grid container sx={OVERLAY_STYLE} direction="column">
        <Grid item xs={0.75} className="pop_top">
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <Typography
                variant="h4"
                color={theme.palette.secondary.contrastText}
              >
                {post.title}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleMoreClicked}
                style={{ backgroundColor: theme.palette.primary.light }}
              >
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
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <ButtonGroup variant="text" orientation="vertical">
                  <Button
                    variant="contained"
                    style={{ backgroundColor: theme.palette.primary.dark }}
                    onClick={handleEditClicked}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    style={{ backgroundColor: theme.palette.primary.dark }}
                    onClick={handleDeleteClicked}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Popover>
            </Grid>
          </Grid>
          <Divider sx={{ borderWidth: 1, borderColor: 'black' }} />
        </Grid>
        <Grid item xs={0.5} className="pop_mid" sx={{ pb: 2 }}>
          <Grid container direction="row" alignItems="center" gap={2}>
            <Grid item>
              <Typography
                variant="subtitle2"
                color={theme.palette.secondary.contrastText}
                style={TEXT_SHIFT_DOWN_STYLE as CSSProperties}
              >
                {post.author}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color={theme.palette.secondary.contrastText}
                style={TEXT_SHIFT_DOWN_STYLE as CSSProperties}
              >
                {dateToString(post.date)}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container gap={2} alignItems="center">
                {createTags(theme, post.tags)}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Typography
            variant="body1"
            color={theme.palette.secondary.contrastText}
            style={CONTENT_STYLE}
          >
            {post.content}
          </Typography>
        </Grid>
      </Grid>
    </Modal>
  );
};
