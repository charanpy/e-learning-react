import React, { useState } from "react";
import VideoContentComponent from "./VideoContent.component";
import VideoDetailContainer from "./VideoDetailContainer.component";
import "./video-details.css";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import request from "../../lib/fetch";
import LoaderIndicator from "../shared/loader/LoaderIndicator.component";

const VideoBannerComponent = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["course-video", id], () =>
    request(`/video/course/${id}`, "GET", null, true)
  );
  const [currentVideo, nextVideo] = useState(0);
  if (isLoading) return <LoaderIndicator />;
  //console.log(data);
  console.log(currentVideo, "parent");
  return (
    <div className="flex-row video-banner-component">
      <VideoDetailContainer video={data} currentVideo={currentVideo} />
      <VideoContentComponent
        video={data}
        changeVideo={nextVideo}
        currentVideo={currentVideo}
      />
    </div>
  );
};

export default VideoBannerComponent;
