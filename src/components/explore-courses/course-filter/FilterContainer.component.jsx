import React from 'react';
import useCourse from '../../../pages/explore-course/useCourse';
import LoaderIndicator from '../../shared/loader/LoaderIndicator.component';
import Course from '../Course.component';
import CourseFilter from './CourseFilter.component';

const FilterContainer = () => {
  const [courses, isLoading, setFilter] = useCourse();
  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      <CourseFilter setFilter={setFilter} />
      <Course
        courses={courses?.length ? courses : []}
        slice={courses?.length || 0}
      />
    </>
  );
};

export default FilterContainer;
