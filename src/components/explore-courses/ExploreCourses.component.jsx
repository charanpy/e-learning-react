import React from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import Course from './Course.component';
import './course.css';

const ExploreCourses = () => {
  const { data } = useQuery('explore-course', () => request('/course'));
  return (
    <>
      <Course courses={data} />
    </>
  );
};

export default ExploreCourses;
