import React from 'react';
import { useQuery } from 'react-query';
import { useParams, Navigate } from 'react-router-dom';
import CourseVideoContainer from '../../components/course-video/CourseVideoContainer.component';
import LoaderIndicator from '../../components/shared/loader/LoaderIndicator.component';
import request from '../../lib/fetch';

const CourseVideo = () => {
  const { courseId } = useParams();
  const { isLoading, data } = useQuery(['course-video', courseId], () =>
    request(`/video/course/${courseId}`, 'GET', null, true)
  );
  const { isLoading: loading, data: course } = useQuery(
    ['course', courseId],
    () => request(`/course/${courseId}`)
  );

  if (isLoading || loading) return <LoaderIndicator />;
  if (!isLoading && !data?.videos?.length)
    return <h1 className='courseHeader'>No Videos to display</h1>;
  return (
    <>
      {data?.videos?.length && (
        <CourseVideoContainer
          videos={data?.videos}
          course={course}
          materials={data?.materials}
        />
      )}
    </>
  );
};

export default CourseVideo;
