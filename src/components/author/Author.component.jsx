import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import usePage from '../../hooks/usePage';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import PaginateArrow from '../shared/Paginate/Paginate.component';
import AuthorContainer from './AuthorCard.component';

const Author = () => {
  const [page, totalPage, handlePrev, handleNext, setTotalPage] = usePage();
  const { isLoading, data } = useQuery(['author', page + 1], () =>
    request(`/author?page=${page + 1}`)
  );

  useEffect(() => {
    if (data?.count >= 0) {
      setTotalPage(data?.count);
    }
    // eslint-disable-next-line
  }, [data?.count]);

  if (isLoading) return <LoaderIndicator />;
  return (
    <>
      {data?.authors?.length ? (
        <>
          <AuthorContainer authors={data?.authors} />
          <PaginateArrow
            currentPage={page}
            setNext={handleNext}
            setPrev={handlePrev}
            totalPage={totalPage}
          />
        </>
      ) : (
        <h1 className='courseHeader'>No Author Book</h1>
      )}
    </>
  );
};

export default Author;
