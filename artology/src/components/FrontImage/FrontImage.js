import React from "react";
import "./FrontImage.css";
import frontpage1 from "../../RandomItem/Image/frontpage1.png";
import frontpage2 from "../../RandomItem/Image/frontpage2.jpg";


function FrontImage() {
  return (
    <div className="front-image-container">
      {/* <p>hello</p> */}
      <img src={frontpage1} alt="Swimming Guy"/>
      <img src={frontpage2} alt="Waves in water"/>
    </div>
  );
}

export default FrontImage;
