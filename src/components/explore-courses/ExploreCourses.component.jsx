import React from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import Course from './Course.component';
import './course.css';

const ExploreCourses = () => {
  const { data } = useQuery('explore-course', () => request('/course'));
  return (
    <>
      <h1 className='courseHeader'>Courses</h1>
      <section className='flex-row' style={{ justifyContent: 'space-between' }}>
        {data?.slice(0, 4)?.map((course) => (
          <Course key={course?._id} course={course} />
        ))}
      </section>
    </>
  );
};

export default ExploreCourses;
