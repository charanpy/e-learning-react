import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import usePage from '../../hooks/usePage';
import request from '../../lib/fetch';
import BookCards from '../books/book-card/BookCard.component';
import BookCardHeader from '../books/book-card/BookCardHeader.component';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import PaginateArrow from '../shared/Paginate/Paginate.component';

const IssuedBook = ({ name }) => {
  const [page, totalPage, handlePrev, handleNext, setTotalPage] = usePage();

  const { data, isLoading } = useQuery(name, () =>
    request(`/book-issue/student/${name}`, 'GET', null, true, false)
  );

  useEffect(() => {
    if (data?.count >= 0) setTotalPage(data?.count);
    // eslint-disable-next-line
  }, [data?.count]);
  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      {data?.data?.length ? (
        <>
          <BookCardHeader />
          <BookCards books={data?.data} />
          <PaginateArrow
            currentPage={page}
            setNext={handleNext}
            setPrev={handlePrev}
            totalPage={totalPage}
          />
        </>
      ) : (
        <h1 className='courseHeader'>No Data Found</h1>
      )}
    </>
  );
};

export default IssuedBook;
