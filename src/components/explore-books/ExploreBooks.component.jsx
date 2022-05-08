import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import usePage from '../../hooks/usePage';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';

import { constructFromQuery } from '../../components/books/helper';
import PaginateArrow from '../shared/Paginate/Paginate.component';
import BookCardHeader from '../books/book-card/BookCardHeader.component';
import BookCards from '../books/book-card/BookCard.component';

const ExploreBooksComponent = () => {
  console.log('render');
  const [params] = useSearchParams();
  const [page, totalPage, handlePrev, handleNext, setTotalPage] = usePage();
  const { data, isLoading } = useQuery(
    ['explore-books', constructFromQuery(params), `page=${page + 1}`],
    () => request(`/book?page=${page + 1}&${constructFromQuery(params)}`)
  );

  useEffect(() => {
    if (data?.count !== totalPage) setTotalPage(data?.count);
    // eslint-disable-next-line
  }, [data?.count]);

  console.log(totalPage, 8888);

  if (isLoading) return <LoaderIndicator />;

  return (
    <>
      {data?.data?.length ? (
        <>
          <BookCardHeader />
          <BookCards books={data?.data || []} />
          <PaginateArrow
            currentPage={page}
            setNext={handleNext}
            setPrev={handlePrev}
            totalPage={totalPage}
          />
        </>
      ) : (
        <h1 className='courseHeader m-sm'>No Books Found</h1>
      )}
    </>
  );
};

export default ExploreBooksComponent;
