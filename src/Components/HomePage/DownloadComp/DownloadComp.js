import React from "react";
import leftmobileImage from "../../../assets/images/mobile-0819.jpg";

const DownloadComp = () => {
  return (
    <div className="lowerData">
      <div className="leftSide">
        <img src={leftmobileImage} alt="mobileImg" />
      </div>
      <div className="rightSide">
        <h1>Download your shows to watch offline.</h1>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
    </div>
  );
};

export default DownloadComp;
