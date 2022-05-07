import React from 'react';

const CourseVideo = ({ selectedVideo, videos }) => {
  console.log('Video');
  return (
    <div className='video-detail-container'>
      <video
        className='video'
        key={videos?.[selectedVideo]?.video?.url}
        controls
        controlsList='nodownload'
      >
        <source src={videos?.[selectedVideo]?.video?.url} type='video/mp4' />
      </video>
    </div>
  );
};

export default CourseVideo;
