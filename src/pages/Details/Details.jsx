import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useRef } from "react";
import "./Details.css";

export default function Details(){

  const location = useLocation();
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  const item = location.state.item;

  const capture = ()=>{
    const imageSrc = webcamRef.current.getScreenshot();
    navigate("/photo",{state:{image:imageSrc}});
  };

  return(
    <div className="details-main">
      <div className="details-box">
        <h2>Details</h2>

        <p>Name: {item[0]}</p>
        <p>Role: {item[1]}</p>
        <p>City: {item[2]}</p>

        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
        />

        <button className="capture-btn" onClick={capture}>
          Capture Photo
        </button>
      </div>
    </div>
  );
}
