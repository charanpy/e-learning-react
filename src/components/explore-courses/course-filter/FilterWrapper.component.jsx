import React from 'react';
import Button from '../../shared/button/Button.component';

import CloseSVG from '../../shared/svg/Close.svg';

const FilterWrapper = ({
  handleToggle,
  children,
  handleClear,
  handleSubmit,
}) => {
  return (
    <section className='filterContainer flex-row '>
      <button className='closeFilter' onClick={handleToggle}>
        <CloseSVG />
      </button>
      <div className='flex-col filterWrapper'>
        <div>
          <div>
            <h1 className='filterHeader'>Filters</h1>
          </div>
          <div className='filterBody flex-col'>{children}</div>
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
  );
};

export default FilterWrapper;
