import React, { useRef, useState } from 'react';
import FilterIcon from '../explore-courses/course-filter/FilterIcon.component';
import FilterInput from '../explore-courses/course-filter/FilterInput.component';
import FilterWrapper from '../explore-courses/course-filter/FilterWrapper.component';

const FilterBook = () => {
  const [toggle, setToggle] = useState(false);
  const titleRef = useRef();
  const authorRef = useRef();
  const codeRef = useRef();
  const categoryRef = useRef();

  const handleToggle = () => {
    setToggle((open) => !open);
  };

  return (
    <>
      <FilterIcon handleToggle={handleToggle} />
      {toggle && (
        <FilterWrapper handleToggle={handleToggle}>
          <FilterInput name='Title' ref={titleRef} />
          <FilterInput name='Author' ref={authorRef} />
          <FilterInput name='Code' ref={codeRef} />
          <FilterInput name='Category' ref={categoryRef} />
        </FilterWrapper>
      )}
    </>
  );
};

export default FilterBook;
