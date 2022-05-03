import React from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import Card from './Card.component';
import BookSVG from '../shared/svg/Books.svg';
import PendingSVG from '../shared/svg/Pending.svg';
import ReturnSVG from '../shared/svg/Return.svg';
import { Link } from 'react-router-dom';

const LibraryDashboard = () => {
  const { data, isLoading } = useQuery('library-dashboard', () =>
    request('/book-issue/student', 'GET', null, true, false)
  );

  if (isLoading) return <LoaderIndicator />;
  return (
    <div>
      <h1 className='courseHeader'>Dashboard</h1>

      <div className=' libraryCardWrapper flex-row'>
        <Link to='/library/books#book'>
          <Card
            header='Books'
            count={data?.[0]}
            className='bookCount'
            Icon={BookSVG}
          />
        </Link>
        <Link to='/library/issue-book#book'>
          <Card
            header='Issued Books'
            count={data?.[2]}
            Icon={PendingSVG}
            className='pendingCount'
          />
        </Link>
        <Link to='/library/return-book#book'>
          <Card
            header='Returned Book'
            count={data?.[1]}
            Icon={ReturnSVG}
            className='issueCount'
          />
        </Link>
      </div>
    </div>
  );
};

export default LibraryDashboard;
