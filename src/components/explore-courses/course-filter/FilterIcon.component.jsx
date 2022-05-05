import React from 'react';
import filterIcon from '../../../assets/filter.png';
import './course-filter.css';

const FilterIcon = ({ handleToggle }) => {
  return (
    <div
      className='filterIcon flex-row align justify cursor'
      onClick={handleToggle}
    >
      <img src={filterIcon} alt='filter' width='26px' height='26px' />
    </div>
  );
};

export default FilterIcon;
