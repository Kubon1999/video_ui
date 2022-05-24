import AuthenticationContext from "./AuthenticationContext";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";

const HorizontalVideo = () => {
  const userCredential = useContext(AuthenticationContext);

  if (!userCredential.accessToken) {
    /* user already signed in redirecting to the homepage...*/
    return <Navigate to="/login"></Navigate>;
  } else {
    return (
      <>
        <TopNavbar title="Watch" />
        <h1> horizontal video</h1>;
      </>
    );
  }
};

export default HorizontalVideo;
