import React, { useState } from "react";
import SearchSVG from "../shared/svg/Search.svg";

const VideoContentComponent = (props) => {
  const [search, setSearch] = useState(false);
  const setSearchState = () => {
    setSearch((toggle) => !toggle);
  };
  return (
    <div className="video-content-component">
      <div className="search flex-row align">
        <p>{!search ? "Syllabus" : "Search Syllabus"}</p>
        {!search ? (
          <SearchSVG onClick={setSearchState} className="add-cursor" />
        ) : (
          <p onClick={setSearchState} className="add-cursor">
            Close
          </p>
        )}
        {search && (
          <input
            type="text"
            placeholder="Search Here"
            className="input-search "
          />
        )}
      </div>
      <div className="flex-col video-content-list">
        {props.video.map((data, index) => {
          console.log(data?.description);
          return (
            <p
              className="video-content"
              key={data._id}
              onClick={() => props?.changeVideo(index)}
            >
              {data?.description}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default VideoContentComponent;
