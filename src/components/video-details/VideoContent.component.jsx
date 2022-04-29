import React, { useState } from "react";
import SearchSVG from "../shared/svg/Search.svg";

const VideoContentComponent = () => {
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
        <p className="video-content">React Installation</p>
        <p className="video-content">Router</p>
        <p className="video-content">Redux</p>
        <p className="video-content">State</p>
        <p className="video-content">Hooks</p>
      </div>
    </div>
  );
};

export default VideoContentComponent;
