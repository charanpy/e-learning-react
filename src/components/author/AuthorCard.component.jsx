import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../shared/button/Button.component';
import './author.css';

const AuthorCard = ({ author }) => {
  return (
    <Link
      to={`/library/explore-books?author=${author?.authorName}`}
      className='authorWrap'
    >
      <Button
        className='authorCard flex-row centerAll'
        style={{ width: '100%' }}
      >
        <h1>{author?.authorName}</h1>
      </Button>
    </Link>
  );
};

const AuthorContainer = ({ authors }) => {
  return (
    <>
      <div className='flex-row jus-between' style={{ paddingRight: '2rem' }}>
        {authors?.map((author) => (
          <AuthorCard author={author} key={author?._id} />
        ))}
      </div>
    </>
  );
};
export default AuthorContainer;
