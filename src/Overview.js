import { useContext } from "react";
import AuthenticationContext from "./AuthenticationContext";
import { Navigate, Link } from "react-router-dom";
import "./Overview.css";
import "./TopNavbar.js";
import TopNavbar from "./TopNavbar.js";

const OverView = () => {
  const userCredential = useContext(AuthenticationContext);

  if (!userCredential.accessToken) {
    /* user not signed in, redirect to log in page */
    return <Navigate to="/login"></Navigate>;
  } else {
    return (
      <>
        <TopNavbar title="Featured videos" />
        <div className="featured-videos-grid">
          <ul>
            <li class="w2">
              <Link to="/horizontal-video">
                <figure>
                  <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                  <figcaption>
                    <h2>Barbell Bench Press</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li class="w1">
              <Link to="/vertical-video">
                <figure>
                  <img src="img/vertical-img.png" alt="DB Bench Flys" />
                  <figcaption>
                    <h2>Barbell Bench Press</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li class="w1">
              <Link to="/vertical-video">
                <figure>
                  <img src="img/vertical-img.png" alt="DB Bench Flys" />
                  <figcaption>
                    <h2>DB Bench Flys</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li class="w2">
              <Link to="/horizontal-video">
                <figure>
                  <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                  <figcaption>
                    <h2>Barbell Bench Press</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li class="w1 h2">
              <Link to="/vertical-video">
                <figure>
                  <img src="img/vertical-img.png" alt="DB Bench Flys" />
                  <figcaption>
                    <h2>DB Bench Flys</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li class="w1">
              <Link to="/vertical-video">
                <figure>
                  <img src="img/vertical-img.png" alt="DB Bench Flys" />
                  <figcaption>
                    <h2>DB Bench Flys</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li class="w1">
              <Link to="/vertical-video">
                <figure>
                  <img src="img/vertical-img.png" alt="DB Bench Flys" />
                  <figcaption>
                    <h2>DB Bench Flys</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
            <li class="w2">
              <Link to="/horizontal-video">
                <figure>
                  <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                  <figcaption>
                    <h2>Barbell Bench Press</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>

            <li class="w3">
              <Link to="/horizontal-video">
                <figure>
                  <img src="img/horizontal-img.png" alt="Barbell Bench Press" />
                  <figcaption>
                    <h2>Barbell Bench Press</h2>
                  </figcaption>
                </figure>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
};

export default OverView;
