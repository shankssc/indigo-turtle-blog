import React from 'react';
import { Chip, Theme, useTheme } from '@mui/material';

export const createTags = (theme: Theme, tags: string[]): JSX.Element[] => {
  const TAG_STYLE = {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    width: '5rem',
    height: '1.1rem',
  };
  return tags.map((tag): JSX.Element => {
    return <Chip label={tag} key={tag} size="small" style={TAG_STYLE} />;
  });
};
