import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";
import AuthenticationDispatchContext from "./AuthenticationDispatchContext";
import { Navigate } from "react-router";

const OverView = () => {
  const userCredential = useContext(AuthenticationContext);
  const setUserCredential = useContext(AuthenticationDispatchContext);

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUserCredential({
          accessToken: undefined,
        });
        alert("sign out successful");
      })
      .catch((error) => {
        // An error happened.
        alert(error);
      });
  };

  if (!userCredential.accessToken) {
    /* user not signed in, redirect to log in page */
    return <Navigate to="/login"></Navigate>;
  } else {
    return (
      <div>
        <h1> overview page </h1>
        <h1> hi! {userCredential.email}</h1>
        <button onClick={handleSignOut}>sign out</button>
      </div>
    );
  }
};

export default OverView;
