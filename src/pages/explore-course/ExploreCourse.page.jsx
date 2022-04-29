import React from 'react';
import FilterContainer from '../../components/explore-courses/course-filter/FilterContainer.component';
import Layout from '../../layout';

const ExploreCourse = () => {
  return (
    <>
      <Layout header='Explore'>
        <FilterContainer />
      </Layout>
    </>
  );
};

export default ExploreCourse;
