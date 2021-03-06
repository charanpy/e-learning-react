import React, { useRef, useState } from 'react';
import { errorToaster } from '../../../lib/toast';
import './course-filter.css';
import FilterIcon from './FilterIcon.component';
import FilterInput from './FilterInput.component';
import FilterWrapper from './FilterWrapper.component';

const CourseFilter = ({ setFilter, setInitial }) => {
  const [toggle, setToggle] = useState(false);
  const titleRef = useRef();
  const codeRef = useRef();

  const handleToggle = () => {
    setToggle((open) => !open);
  };

  const handleSubmit = () => {
    const title = titleRef?.current?.value;
    const code = codeRef?.current?.value;

    if (!title && !code) {
      return errorToaster('Please enter course name or code');
    }
    handleToggle();
    setInitial();
    setFilter((filter) => ({ ...filter, code, title }));
  };

  const handleClear = () => {
    titleRef.current.value = '';
    codeRef.current.value = '';
    setFilter((filter) => ({ ...filter, code: '', title: '' }));
  };

  return (
    <>
      <FilterIcon handleToggle={handleToggle} />
      {toggle && (
        <FilterWrapper
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          handleToggle={handleToggle}
        >
          <FilterInput name='Course Name' ref={titleRef} />
          <FilterInput name='Course Code' ref={codeRef} />
        </FilterWrapper>
      )}
    </>
  );
};

export default CourseFilter;
