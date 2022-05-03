import React from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import BookCards from '../books/book-card/BookCard.component';
import BookCardHeader from '../books/book-card/BookCardHeader.component';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';

const IssuedBook = ({ name }) => {
  const { data, isLoading } = useQuery(name, () =>
    request(`/book-issue/student/${name}`, 'GET', null, true, false)
  );
  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      {data?.length ? (
        <>
          <BookCardHeader />
          <BookCards books={data} />
        </>
      ) : (
        <h1 className='courseHeader'>No Data Found</h1>
      )}
    </>
  );
};

export default IssuedBook;
