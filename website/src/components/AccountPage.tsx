import "./styles.css";
import { useNavigate } from "react-router-dom";
import React from "react";

import { ProfilePictureForm } from "./ProfilePictureForm";
import { ChangePasswordForm } from "./ChangePasswordForm";

function AccountPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="container">
      <ChangePasswordForm />
      <ProfilePictureForm />

      <button
        className="submitButton btn"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Home
      </button>
    </div>
  );
}

export { AccountPage };
