import React from 'react';
import FilterBook from '../../components/books/FilterBook.component';
import ExploreBooksComponent from '../../components/explore-books/ExploreBooks.component';

const ExploreBooks = () => {
  return (
    <>
      <h1 className='courseHeader'>Explore Books</h1>
      <ExploreBooksComponent />
      <FilterBook />
    </>
  );
};

export default ExploreBooks;
