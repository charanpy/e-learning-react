import React, { forwardRef } from 'react';

const RegisterInput = forwardRef(
  (
    { type = 'text', label, display = true, required = true, ...props },
    ref
  ) => {
    return (
      <>
        {display && (
          <div className='inputBox w100'>
            <input
              type={type}
              required={required}
              autoComplete='false'
              ref={ref}
              {...props}
            />
            <span>Enter {label}</span>
          </div>
        )}
      </>
    );
  }
);

export default RegisterInput;
