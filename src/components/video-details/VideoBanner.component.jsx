import React from "react";
import VideoContentComponent from "./VideoContent.component";
import VideoDetailContainer from "./VideoDetailContainer.component";
import "./video-details.css";

const VideoBannerComponent = () => {
  return (
    <div className="flex-row video-banner-component">
      <VideoDetailContainer />
      <VideoContentComponent />
    </div>
  );
};

export default VideoBannerComponent;
