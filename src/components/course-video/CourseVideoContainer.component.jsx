import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackArrowSVG from '../shared/svg/BackArrow.svg';
import './course-video.css';
import CourseSyllabus from './CourseSyllabus.component';
import CourseVideo from './CourseVideo.component';
import CourseVideoTabs from './CourseVideoTabs.component';

const CourseVideoContainer = ({ videos, course, materials }) => {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div
        className='courseVideoHeader flex-row align cursor'
        onClick={() => navigate(-1)}
      >
        <BackArrowSVG />
        <h1 className='capitalize'>{course?.courseTitle || 'Course Name'}</h1>
      </div>
      <div className='flex-row video-banner-component'>
        <CourseVideo videos={videos} selectedVideo={selectedVideo} />
        <CourseSyllabus
          setSelectedVideo={setSelectedVideo}
          videos={videos}
          selectedVideo={selectedVideo}
          className='asideVideoContent'
        />
      </div>
      <CourseVideoTabs
        course={course}
        selectedVideo={videos?.[selectedVideo]}
        materials={materials}
      >
        <CourseSyllabus
          setSelectedVideo={setSelectedVideo}
          videos={videos}
          selectedVideo={selectedVideo}
          className='videoContentFull'
        />
      </CourseVideoTabs>
    </>
  );
};

export default CourseVideoContainer;
