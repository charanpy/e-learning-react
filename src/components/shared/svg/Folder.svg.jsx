import React from 'react';

const FolderSVG = ({ open = false, ...props }) => {
  return (
    <>
      {open ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24'
          width='24'
          style={{ fill: 'var(--light-500)' }}
          {...props}
        >
          <path d='M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18L6.4 10H23.5L20.925 18.575Q20.725 19.225 20.188 19.613Q19.65 20 19 20ZM6.1 18H19L20.8 12H7.9ZM6.1 18 7.9 12 6.1 18ZM4 8V6Q4 6 4 6Q4 6 4 6V8Z' />
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          style={{ fill: 'var(--light-500)' }}
          height='24'
          width='24'
          {...props}
        >
          <path d='M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z' />
        </svg>
      )}
    </>
  );
};

export default FolderSVG;
