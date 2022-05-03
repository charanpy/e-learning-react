import React, { forwardRef } from 'react';

const FilterInput = forwardRef(({ name, type = 'text', ...props }, ref) => {
  return (
    <>
      <label className='filterLabel mb'>Enter {name}</label>
      <input
        type={type}
        placeholder={name}
        className='filterInput mb'
        ref={ref}
        {...props}
      />
    </>
  );
});

export default FilterInput;
