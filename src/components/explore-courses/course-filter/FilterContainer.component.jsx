import React, { useEffect } from 'react';
import usePage from '../../../hooks/usePage';
import useCourse from '../../../pages/explore-course/useCourse';
import LoaderIndicator from '../../shared/loader/LoaderIndicator.component';
import PaginateArrow from '../../shared/Paginate/Paginate.component';
import Course from '../Course.component';
import CourseFilter from './CourseFilter.component';

const FilterContainer = () => {
  const [page, totalPage, handlePrev, handleNext, setTotalPage, setInitial] =
    usePage();
  const [courses, isLoading, setFilter] = useCourse(page);

  useEffect(() => {
    if (courses?.count >= 0) setTotalPage(courses?.count);
    // eslint-disable-next-line
  }, [courses?.count]);
  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      <CourseFilter setFilter={setFilter} setInitial={setInitial} />
      {courses?.courses?.length ? (
        <>
          <Course
            courses={courses?.courses}
            slice={courses?.courses?.length || 0}
          />
          <PaginateArrow
            currentPage={page}
            setNext={handleNext}
            setPrev={handlePrev}
            totalPage={totalPage}
          />
        </>
      ) : (
        <p className='notFoundText'>No Courses Found</p>
      )}
    </>
  );
};

export default FilterContainer;
