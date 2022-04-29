import React from "react";
import BackArrowSVG from "../shared/svg/BackArrow.svg";

const VideoDetailContainer = () => {
  return (
    <div className="video-detail-container">
      <div className="course-intro flex-row align">
        <div className="back-arrow">
          <BackArrowSVG />
        </div>
        <div className="course-name">Sample</div>
      </div>
      <video width="100%" height="567px" controls className="video">
        <source src="/video1.mp4" type="video/mp4" />
      </video>
      <div className="video-helps flex-row align ">
        <span>About</span>
        <span>Discussion</span>
        <span>Bookmarks</span>
      </div>
      <hr></hr>
    </div>
  );
};

export default VideoDetailContainer;
