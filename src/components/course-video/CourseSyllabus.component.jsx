import React, { memo, useRef } from 'react';
import { useQuery } from 'react-query';
import { client } from '../../App';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import Pagination from '../shared/pagination/Paginate.component';

import CourseVideoSVG from '../shared/svg/CourseVideo.svg';

const CourseContentList = memo(
  ({
    videos: data,
    selectedVideo,
    setSelectedVideo,
    index,
    course,
    completed,
  }) => {
    const statusRef = useRef();
    const handleClick = async () => {
      const status = statusRef.current?.checked ? 'mark' : 'ignore';
      try {
        await request(
          `/complete-lesson?status=${status}`,
          'POST',
          { courseId: course, lessonId: data?._id },
          true,
          true
        );
        client.invalidateQueries(['complete-lesson', course]);
      } catch (error) {}
    };
    return (
      <div
        className={`videoSyllabusCard cursor flex-row align ${
          selectedVideo === index ? 'selectedVideo' : ''
        }`}
        key={data?._id}
        onClick={() => setSelectedVideo(index)}
      >
        <h1 className='flex-row align' style={{ lineHeight: 2 }}>
          <input
            type='checkbox'
            ref={statusRef}
            onClick={handleClick}
            style={{ marginRight: '1rem' }}
            defaultChecked={completed}
          />
          <div>
            <CourseVideoSVG />
          </div>
          <span>{(index + 1 + '').padStart(2, 0)}</span> {data?.title}
        </h1>
      </div>
    );
  }
);

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
          course={props.course}
          completed={!!props?.completed?.[video?._id]}
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
  course,
  currPage,
}) => {
  const { data, isLoading } = useQuery(
    ['complete-lesson', course],
    () => request(`/complete-lesson/${course}`, 'GET', null, true, false),
    {
      enabled: !!videos?.length,
    }
  );
  if (isLoading) return <LoaderIndicator />;

  console.log(data);
  return (
    <div className={`flex-col video-content-list ${className}`}>
      <Pagination
        Component={CourseContent}
        selectedVideo={selectedVideo}
        setSelectedVideo={setSelectedVideo}
        data={videos}
        header='Course Content'
        course={course}
        completed={data}
        currPage={currPage}
      />
    </div>
  );
};

export default CourseSyllabus;
