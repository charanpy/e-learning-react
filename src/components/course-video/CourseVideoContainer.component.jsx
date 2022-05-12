import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import request from '../../lib/fetch';
import BackArrowSVG from '../shared/svg/BackArrow.svg';
import './course-video.css';
import CourseSyllabus from './CourseSyllabus.component';
import CourseVideo from './CourseVideo.component';
import CourseVideoTabs from './CourseVideoTabs.component';

const updateRecentWatched = async (video, priority) => {
  try {
    await request(
      '/enrol-course/recently-watched',
      'POST',
      {
        title: video?.title,
        courseId: video?.course,
        priority,
        lectureId: video?._id,
      },
      true,
      false
    );
  } catch (error) {}
};

const CourseVideoContainer = ({ videos, course, materials }) => {
  const [params] = useSearchParams();
  const [selectedVideo, setSelectedVideo] = useState(
    params.get('video') ? params.get('video') - 1 : 0
  );

  useEffect(() => {
    return () => updateRecentWatched(videos[selectedVideo], selectedVideo + 1);
    // eslint-disable-next-line
  }, [selectedVideo]);
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
          course={course?._id}
          currPage={
            params.get('video') ? Math.floor(params.get('video') / 11) : 0
          }
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
          className='asideVideoContent'
          course={course?._id}
          currPage={
            params.get('video') ? Math.floor(params.get('video') / 11) : 0
          }
        />
      </CourseVideoTabs>
    </>
  );
};

export default CourseVideoContainer;
