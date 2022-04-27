import React from 'react';
import CourseVideoSVG from '../shared/svg/CourseVideo.svg';

const CourseContent = ({ videos }) => {
  return (
    <section className='courseContentContainer'>
      <h1 className='courseTitle syllabus'>Course Content</h1>
      <div className='videoContainer'>
        {videos?.map((video, index) => (
          <div className='video flex-row' key={video?._id}>
            <h1 className='courseContentTitle flex-row align capitalize'>
              <p className='videoCount'>{(index + 1 + '').padStart(2, 0)}</p>
              <CourseVideoSVG />
              {video?.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseContent;
