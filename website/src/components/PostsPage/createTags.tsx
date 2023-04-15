import React from 'react';
import { Chip, Theme, useTheme } from '@mui/material';

export const createTags = (theme: Theme, tags: string[]): JSX.Element[] => {
  return tags.map((tag): JSX.Element => {
    return (
      <Chip
        label={tag}
        key={tag}
        size="small"
        style={{
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.contrastText,
        }}
      />
    );
  });
};
