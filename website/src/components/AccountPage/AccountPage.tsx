import { useNavigate } from 'react-router-dom';
import React from 'react';
import { ChangePasswordForm } from './ChangePasswordForm';
import { ProfilePictureIcon } from './ProfilePictureIcon';
import { Button, Container, useTheme } from '@mui/material';

const CONTAINER_STYLE = {
  paddingBottom: '20px',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1rem',
  maxWidth: '500px',
  margin: '50px auto',
};

function AccountPage(): JSX.Element {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container
      sx={{ ...CONTAINER_STYLE, backgroundColor: theme.palette.secondary.dark }}
    >
      <ProfilePictureIcon />
      <ChangePasswordForm />

      <Button
        onClick={() => {
          navigate('/postspage', { replace: true });
        }}
      >
        Go Back
      </Button>
    </Container>
  );
}

export { AccountPage };
