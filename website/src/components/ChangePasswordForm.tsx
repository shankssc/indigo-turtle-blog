import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
function ChangePasswordForm(): JSX.Element {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // submits password change
  const handleSubmitPassword = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      axios
        .post("/changePassword", { currentPassword, newPassword })
        .then((response) => {
          setPasswordError("Password changed");
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
        })
        .catch((error) => {
          console.error(error);
          setPasswordError("An error occurred while changing the password.");
        });
    }
  };
  return (
    <div className="formContainer">
      Change your password
      <form
        className=""
        onSubmit={handleSubmitPassword}
        action="/changePassword"
        method="POST"
      >
        <label htmlFor="password">Current password:</label>
        <input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />

        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <span style={{ color: "red" }}>{passwordError}</span>

        <input className="btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export { ChangePasswordForm };
