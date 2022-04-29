import React from "react";
import VideoContentComponent from "./VideoContent.component";
import VideoDetailContainer from "./VideoDetailContainer.component";
import "./video-details.css";
import { useQuery } from "react-query";
import request from "../../lib/fetch";

const VideoBannerComponent = () => {
  const { data } = useQuery("explore-video", () => request("/video"));

  return (
    <div className="flex-row video-banner-component">
      <VideoDetailContainer />
      <VideoContentComponent />
    </div>
  );
};

export default VideoBannerComponent;
