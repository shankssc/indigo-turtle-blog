import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

function ProfilePictureForm(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [fileError, setFileError] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target?.files?.[0];
    if (file != null) {
      if (!file.type.includes("image")) {
        setFileError("Only image files are allowed");
      } else if (file.size > 5000000) {
        setFileError("File size cannot exceed 5MB");
      } else {
        setSelectedFile(file);
        setFileError("");
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post("/changeProfilePicture", { selectedFile })
      .then((response) => {
        setFileError("Profile picture changed");
      })
      .catch((error) => {
        console.error(error);
        setFileError("An error occurred while changing profile pictures.");
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="formContainer"
      >
        <label htmlFor="profilePicture">Change your profile picture:</label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileUpload}
          required
        />
        <span style={{ color: "red" }}>{fileError}</span>
        <input className="btn" type="submit" value="Upload" />
      </form>
    </div>
  );
}

export { ProfilePictureForm };
