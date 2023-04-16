import React from 'react';
import { Button, Grid, Typography, useTheme } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';

export const NavGuest = ({
  navigate,
}: {
  navigate: NavigateFunction;
}): JSX.Element => {
  const theme = useTheme();
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
        <Button variant="text" onClick={() => navigate('/register')}>
          <Typography variant="h6" color={theme.palette.secondary.contrastText}>
            Sign up
          </Typography>
        </Button>
        <Button variant="text" onClick={() => navigate('/login')}>
          <Typography variant="h6" color={theme.palette.secondary.contrastText}>
            Sign in
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};
