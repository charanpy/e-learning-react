import React from 'react';
import CourseDetailContainer from '../../components/course-details/CourseDetailContainer.component';
import '../../components/course-details/course-details.css';
import Container from '../../layout/Container';

const CourseDetails = () => {
  return (
    <>
      <Container header='Course' showNav={false} />
      <CourseDetailContainer />
    </>
  );
};

export default CourseDetails;
