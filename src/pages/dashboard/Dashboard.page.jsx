import React from 'react';
import Banner from '../../components/banner/Banner.component';
import ExploreCourses from '../../components/explore-courses/ExploreCourses.component';
import MyCourse from '../../components/my-course/MyCourse.component';
import Layout from '../../layout';

const DashboardPage = () => {
  return (
    <Layout header='Dashboard'>
      <Banner />
      <MyCourse />
      <ExploreCourses />
    </Layout>
  );
};

export default DashboardPage;
