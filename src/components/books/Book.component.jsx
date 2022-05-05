import React, { useEffect } from 'react';
import BookCard from './book-card/BookCard.component';
import BookCardHeader from './book-card/BookCardHeader.component';
import './book-card/book-card.css';
import { useQuery } from 'react-query';
import usePage from '../../hooks/usePage';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import FilterBook from './FilterBook.component';
import PaginateArrow from '../shared/Paginate/Paginate.component';

const Book = () => {
  const [page, totalPage, handlePrev, handleNext, setTotalPage] = usePage();
  const { data, isLoading } = useQuery(['books', `page=${page + 1}`], () =>
    request(`/book?page=${page + 1}`)
  );

  useEffect(() => {
    if (data?.count >= 0) setTotalPage(data?.count);
  }, [data?.count]);

  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      {data?.data?.length ? (
        <>
          <BookCardHeader />
          <BookCard books={data?.data} />
          <FilterBook />
          <PaginateArrow
            currentPage={page}
            setNext={handleNext}
            setPrev={handlePrev}
            totalPage={totalPage}
          />
        </>
      ) : (
        <h1 className='courseHeader'>No COurse Found</h1>
      )}
    </>
  );
};

export default Book;
