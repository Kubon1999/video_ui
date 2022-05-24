import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";
import AuthenticationDispatchContext from "./AuthenticationDispatchContext";
import { Navigate, Link } from "react-router-dom";
import "./Overview.css";

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
      <>
        <div className="nav-container">
          <p>
            <b> hi!</b> {userCredential.email}
          </p>
          <button onClick={handleSignOut}>sign out</button>
          <h1 className="el-100"> Featured videos </h1>
        </div>
        <div className="featured-videos-grid">
          <ul>
            <li class="w2">
              <figure>
                <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                <figcaption>
                  <h2>Barbell Bench Press</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w1">
              <figure>
                <img src="img/vertical-img.png" alt="DB Bench Flys" />
                <figcaption>
                  <h2>Barbell Bench Press</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w1">
              <figure>
                <img src="img/vertical-img.png" alt="DB Bench Flys" />
                <figcaption>
                  <h2>DB Bench Flys</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w2">
              <figure>
                <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                <figcaption>
                  <h2>Barbell Bench Press</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w1 h2">
              <figure>
                <img src="img/vertical-img.png" alt="DB Bench Flys" />
                <figcaption>
                  <h2>DB Bench Flys</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w1">
              <figure>
                <img src="img/vertical-img.png" alt="DB Bench Flys" />
                <figcaption>
                  <h2>DB Bench Flys</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w1">
              <figure>
                <img src="img/vertical-img.png" alt="DB Bench Flys" />
                <figcaption>
                  <h2>DB Bench Flys</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w2">
              <figure>
                <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                <figcaption>
                  <h2>Barbell Bench Press</h2>
                </figcaption>
              </figure>
            </li>
            <li class="w3">
              <figure>
                <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                <figcaption>
                  <h2>Barbell Bench Press</h2>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </>
    );
  }
};

export default OverView;
