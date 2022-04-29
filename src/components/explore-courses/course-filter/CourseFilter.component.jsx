import React, { useRef, useState } from 'react';
import filterIcon from '../../../assets/filter.png';
import { errorToaster } from '../../../lib/toast';
import Button from '../../shared/button/Button.component';
import CloseSVG from '../../shared/svg/Close.svg';
import './course-filter.css';

const CourseFilter = ({ setFilter }) => {
  console.log('course filter');
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
    setFilter((filter) => ({ ...filter, code, title }));
  };

  const handleClear = () => {
    titleRef.current.value = '';
    codeRef.current.value = '';
    setFilter((filter) => ({ ...filter, code: '', title: '' }));
  };

  return (
    <>
      <div
        className='filterIcon flex-row align justify cursor'
        onClick={handleToggle}
      >
        <img src={filterIcon} alt='filter' width='26px' height='26px' />
      </div>
      {toggle && (
        <section className='filterContainer flex-row '>
          <button className='closeFilter' onClick={handleToggle}>
            <CloseSVG />
          </button>
          <div className='flex-col filterWrapper'>
            <div>
              <div>
                <h1 className='filterHeader'>Filters</h1>
              </div>
              <div className='filterBody flex-col'>
                <label className='filterLabel mb'>Enter Course Name</label>
                <input
                  type='text'
                  placeholder='Search'
                  className='filterInput mb'
                  ref={titleRef}
                />
                <label className='filterLabel mb'>Enter Course Code</label>
                <input
                  type='text'
                  placeholder='Course Code'
                  className='filterInput mb'
                  ref={codeRef}
                />
              </div>
            </div>
            <div className='flex-row filterBtnWrapper'>
              <Button className='filterBtn clearFilter' onClick={handleClear}>
                Clear
              </Button>
              <Button className='filterBtn' onClick={handleSubmit}>
                Search
              </Button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CourseFilter;
