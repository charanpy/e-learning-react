import React, { memo } from 'react';
import Pagination from '../shared/pagination/Paginate.component';

import CourseVideoSVG from '../shared/svg/CourseVideo.svg';

const CourseContentList = memo(
  ({ videos: data, selectedVideo, setSelectedVideo, index }) => {
    return (
      <div
        className={`videoSyllabusCard cursor flex-row align ${
          selectedVideo === index ? 'selectedVideo' : ''
        }`}
        key={data?._id}
        onClick={() => setSelectedVideo(index)}
      >
        <h1 className='flex-row align' style={{ lineHeight: 2 }}>
          <div>
            <CourseVideoSVG />
          </div>
          <span>{(index + 1 + '').padStart(2, 0)}</span> {data?.title}
        </h1>
      </div>
    );
  }
);

const vide = [
  { _id: 1 },
  { _id: 2 },
  { _id: 3 },
  { _id: 4 },
  { _id: 5 },
  { _id: 6 },
  { _id: 7 },
  { _id: 8 },
  { _id: 9 },
  { _id: 10 },
  { _id: 11 },
  { _id: 12 },
  { _id: 13 },
];

const CourseContent = (props) => {
  return (
    <div className='videoSyllabusContent'>
      {props?.data?.map((video, index) => (
        <CourseContentList
          index={props?.page * 10 + index}
          videos={video}
          selectedVideo={props?.selectedVideo}
          setSelectedVideo={props?.setSelectedVideo}
          key={video?._id}
        />
      ))}
    </div>
  );
};

const CourseSyllabus = ({
  videos = [],
  setSelectedVideo,
  selectedVideo,
  className = '',
}) => {
  return (
    <div className={`flex-col video-content-list ${className}`}>
      <Pagination
        Component={CourseContent}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        data={videos}
        header='Course Content'
      />
    </div>
  );
};

export default CourseSyllabus;
