import { useLocation } from "react-router-dom";
import "./PhotoResult.css";

export default function PhotoResult(){

  const location = useLocation();
  const image = location.state.image;

  return(
    <div className="photo-main">
      <div className="photo-box">
        <h2>Photo Result</h2>
        <img src={image} alt="captured" width="300"/>
      </div>
    </div>
  );
}