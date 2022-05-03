import React from 'react';
import BookCard from './book-card/BookCard.component';
import BookCardHeader from './book-card/BookCardHeader.component';
import './book-card/book-card.css';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';
import LoaderIndicator from '../shared/loader/LoaderIndicator.component';
import FilterBook from './FilterBook.component';

const Book = () => {
  const { data, isLoading } = useQuery('books', () => request('/book'));

  if (isLoading) return <LoaderIndicator />;
  return (
    <div>
      <BookCardHeader />
      <BookCard books={data} />
      <FilterBook />
    </div>
  );
};

export default Book;
