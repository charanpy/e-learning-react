import React from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import Course from './Course.component';
import './course.css';

const ExploreCourses = () => {
  const { data, isLoading } = useQuery('explore-course', () =>
    request('/course')
  );
  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      <Course courses={data?.courses?.length ? data?.courses : []} />
    </>
  );
};

export default ExploreCourses;
