import AuthenticationContext from "./AuthenticationContext";
import AuthenticationDispatchContext from "./AuthenticationDispatchContext";
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";

const TopNavbar = ({ title }) => {
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
  return (
    <div className="nav-container">
      <p>
        <b> hi!</b> {userCredential.email}
      </p>
      <button onClick={handleSignOut}>sign out</button>
      <h1 className="el-100"> {title}</h1>
    </div>
  );
};

export default TopNavbar;
