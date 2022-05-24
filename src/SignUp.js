import { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthenticationContext from "./AuthenticationContext";
import AuthenticationDispatchContext from "./AuthenticationContext";
import { Navigate, Link } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confPass, setConfPass] = useState("");
  const userCredential = useContext(AuthenticationContext);
  const setUserCredential = useContext(AuthenticationDispatchContext);

  const handleSignUp = async () => {
    /* validate passwords */
    if (pass === confPass) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, pass)
        .then((credential) => {
          // Signed in
          alert("user created, redirecting to homepage...");
          setUserCredential(credential);
          window.location.href = "/";
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert("passwords are not the same");
    }
  };

  if (userCredential.accessToken) {
    /* user logged in go to homepage */
    return <Navigate replace to="/" />;
  } else {
    return (
      <div className="sign-up-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
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
          <label htmlFor="confPass">
            Confirm Password
            <input
              id="confPass"
              value={confPass}
              placeholder="Confirm password"
              type="password"
              onChange={(e) => setConfPass(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
        <Link to="/login">
          <p>already have an account? log in here!</p>
        </Link>
      </div>
    );
  }
};

export default SignUp;
