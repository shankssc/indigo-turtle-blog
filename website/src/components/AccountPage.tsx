import './styles.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { ProfilePictureForm } from './ProfilePictureForm';
import { ChangePasswordForm } from './ChangePasswordForm';
import { ProfilePictureIcon } from './ProfilePictureIcon';

function AccountPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="container">
      <ProfilePictureIcon />
      <ChangePasswordForm />
      <ProfilePictureForm />

      <button
        className="btn"
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        Home
      </button>
    </div>
  );
}

export { AccountPage };
