import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import CourseBanner from './CourseBanner.component';
import './course-details.css';
import CourseContent from './CourseContent.component';

const CourseDetailContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(['course', id], () =>
    request(`/course/${id}`)
  );

  if (isLoading) return <LoaderIndicator />;

  console.log(data);
  return (
    <>
      <CourseBanner course={data} />
      <CourseContent videos={data?.count?.[0]} />
    </>
  );
};

export default CourseDetailContainer;
