import React from "react";
import "./BackgroundVideo.css";
// import groundVideo from "../../Video/6169116-uhd_3840_2160_25fps.mp4";

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src="https://videos.pexels.com/video-files/6169116/6169116-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="color-overlay"></div>
      <div className="overlay">
        <h1>Fast Forward Logistics</h1>
        <p className="logistics-text">
          Leveraging cutting-edge technology, industry expertise, and a
          customer-centric approach to deliver tailored logistics solutions.
        </p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
