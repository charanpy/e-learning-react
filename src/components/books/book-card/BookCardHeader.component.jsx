import React from 'react';
import './book-card.css';

const BookCardHeader = () => {
  return (
    <div className='flex-row bookCardHeader'>
      <h1 className='bookHeaderText w-half'>BOOK DETAILS</h1>
      <h1 className='bookHeaderText w-quarter'>CATEGORY</h1>
      <h1 className='bookHeaderText'>ACTIONS</h1>
    </div>
  );
};

export default BookCardHeader;
