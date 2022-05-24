import AuthenticationContext from "./AuthenticationContext";
import { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import TopNavbar from "./TopNavbar";
import "./Video.css";
import RecommendedSection from "./RecommendedSection";
import CommentSection from "./CommentSection";

const HorizontalVideo = () => {
  const userCredential = useContext(AuthenticationContext);
  const [showCommentSection, setShowCommentSection] = useState(true);

  if (!userCredential.accessToken) {
    /* user already signed in redirecting to the homepage...*/
    return <Navigate to="/login"></Navigate>;
  } else {
    return (
      <>
        <TopNavbar title="Watch" />
        <Link to="/">
          <p> BACK TO FEATURED VIDEOS</p>
        </Link>
        <section className="video-container ">
          <div className="video">
            <video width="100%" height="70%" controls>
              <source src="/videos/horizontal-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h1>Horizontal Video</h1>;<h2>Uploaded at: 24.05.2022 16:39:00</h2>;
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores{" "}
            </p>
            ;
          </div>
          <div className="recommended-section">
            <RecommendedSection />
          </div>
          <div className="comment-section">
            {showCommentSection ? (
              <>
                <button
                  className="comment-button"
                  onClick={() => {
                    setShowCommentSection(false);
                  }}
                >
                  Hide comment section
                </button>
                <CommentSection />
              </>
            ) : (
              <button
                className="comment-button"
                onClick={() => {
                  setShowCommentSection(true);
                }}
              >
                Show comment section
              </button>
            )}
          </div>
        </section>
      </>
    );
  }
};

export default HorizontalVideo;
