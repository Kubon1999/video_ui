import { useState, useContext } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AuthenticationContext from "./AuthenticationContext";
import AuthenticationDispatchContext from "./AuthenticationDispatchContext";
import { Link, Navigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const userCredential = useContext(AuthenticationContext);
  const setUserCredential = useContext(AuthenticationDispatchContext);

  const handleLogIn = async () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, pass)
      .then((credential) => {
        // Signed in
        alert("user succesfully logged in! redirecting to the homepage...");
        setUserCredential(credential);
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  if (userCredential.accessToken) {
    /* user already signed in redirecting to the homepage...*/
    return <Navigate to="/"></Navigate>;
  } else {
    return (
      <div className="log-in-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogIn();
          }}
        >
          <label htmlFor="email">
            Email
            <input
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="pass">
            Password
            <input
              id="pass"
              value={pass}
              placeholder="Password"
              type="password"
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <button>Log in</button>
        </form>
        <Link to="/signup">
          <p>no account? sign up here!</p>
        </Link>
      </div>
    );
  }
};
export default LogIn;
