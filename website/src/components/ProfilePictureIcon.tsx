import React, { useState } from 'react';
import axios from 'axios';
import './styles.css';

function ProfilePictureIcon(): JSX.Element {
  // we need to add a profile picture to the user model. Default turtle image will load in and then be replaced with uploaded picture if available
  return (
    <div>
      <img
        className="profilePicture"
        src={require('../turtleCircle.png')}
        alt=""
      />
    </div>
  );
}

export { ProfilePictureIcon };
