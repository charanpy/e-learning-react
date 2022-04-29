import React from 'react';
import MyCourse from '../../components/my-course/MyCourse.component';
import Layout from '../../layout';

const MyCoursePage = () => {
  return (
    <Layout header='Courses'>
      <MyCourse />
    </Layout>
  );
};

export default MyCoursePage;
