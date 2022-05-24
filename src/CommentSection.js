import { useContext, useState } from "react";
import AuthenticationContext from "./AuthenticationContext";
import "./Video.css";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const userCredential = useContext(AuthenticationContext);

  return (
    <>
      <h1>COMMENTS:</h1>
      <label htmlFor="your-comment">Your comment:</label>
      <input
        id="your-comment"
        value={comment}
        placeholder="Your text here"
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        className="comment-button"
        onClick={() => {
          if (comment !== "")
            setComments(
              comments.concat(userCredential.email + ":\n " + comment)
            );
        }}
      >
        ADD
      </button>
      {comments.map((comment, id) => {
        return <p key={id}> {comment}</p>;
      })}
    </>
  );
};

export default CommentSection;
