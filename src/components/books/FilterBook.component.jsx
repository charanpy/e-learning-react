import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { errorToaster } from '../../lib/toast';
import FilterIcon from '../explore-courses/course-filter/FilterIcon.component';
import FilterInput from '../explore-courses/course-filter/FilterInput.component';
import FilterWrapper from '../explore-courses/course-filter/FilterWrapper.component';
import { constructUrlParams } from './helper';

const FilterBook = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const titleRef = useRef();
  const authorRef = useRef();
  const codeRef = useRef();
  const categoryRef = useRef();
  const publisherRef = useRef();
  const handleToggle = () => {
    setToggle((open) => !open);
  };
  const handleSubmit = () => {
    const title = titleRef?.current?.value;
    const author = authorRef?.current?.value;
    const accessCode = codeRef?.current?.value;
    const category = categoryRef?.current?.value;
    const publisher = publisherRef?.current?.value;

    if (!(title || author || accessCode || category || publisher))
      return errorToaster('Please fill fields');
    handleToggle();
    navigate(
      `/library/explore-books?${constructUrlParams({
        title,
        author,
        accessCode,
        category,
        publisher,
      })}`
    );
  };

  return (
    <>
      <FilterIcon handleToggle={handleToggle} />
      {toggle && (
        <FilterWrapper handleToggle={handleToggle} handleSubmit={handleSubmit}>
          <FilterInput name='Title' ref={titleRef} />
          <FilterInput name='Author' ref={authorRef} />
          <FilterInput name='Code' ref={codeRef} />
          <FilterInput name='Category' ref={categoryRef} />
          <FilterInput name='Publisher' ref={publisherRef} />
        </FilterWrapper>
      )}
    </>
  );
};

export default FilterBook;
