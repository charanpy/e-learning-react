import React from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import Course from '../explore-courses/Course.component';
import MyEnrollments from '../my-enrollments/MyEnrollments.component';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';

const MyCourse = () => {
  const { data, isLoading } = useQuery('my-course', () =>
    request('/enrol-course/my-course', 'GET', null, true, false)
  );

  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      {data?.length ? (
        <>
          <MyEnrollments course={data?.[0]} />
          <Course courses={data} header='My Courses' />
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default MyCourse;
