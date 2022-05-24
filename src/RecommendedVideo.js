import "./Video.css";
import { Link } from "react-router-dom";

const RecommendedSection = () => {
  return (
    <Link to="/horizontal-video">
      <div className="recommended-video">
        <img src="img/horizontal-img.png"></img>
        <p> HORIZONTAL VIDEO</p>
      </div>
    </Link>
  );
};

export default RecommendedSection;
