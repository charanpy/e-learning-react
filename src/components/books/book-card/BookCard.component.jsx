import { memo, useState } from 'react';
import DownArrowSVG from '../../shared/svg/DownArrow.svg';
import defaultBook from '../../../assets/defaultBook.jpg';
import BookDetails from './BookDetails.component';
import './book-card.css';

export const mapCategory = (category, n = 2) => {
  if (!category?.length) return;

  const categories = [];

  for (let i = 0; i < n; i++) {
    categories.push(category[i]?.categoryName);
  }

  return categories.join(',');
};

export const formatDate = (date = Date.now()) => {
  const formatDate = new Date(date);
  return `${formatDate?.getFullYear()}/${formatDate?.getMonth()}/${formatDate?.getDay()}`;
};

export const formatDueDate = (date, issue = false) => {
  return `${issue ? 'Issue' : 'Due'}- ${formatDate(date)}`;
};

const BookCard = memo(({ book, expiryDate, issueDate }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal((open) => !open);
  };
  return (
    <div
      key={book?._id}
      className='flex-row shadow-md rounded-sm bookWrapper bookCard'
    >
      <div className='flex-row align w-half bookDetails'>
        <figure>
          <img
            src={book?.image?.url || defaultBook}
            width={100}
            height={100}
            alt='book'
            className='bookImage mr-2'
          />
        </figure>
        <figcaption className=' flex-col bookInfo'>
          <h1 className='capitalize'>{book?.title || 'Javascript'}</h1>
          <p className='capitalize flex-row'>
            <strong>Author:</strong>

            {book?.author?.authorName || 'JS'}
          </p>
          <p className='capitalize flex-row'>
            <strong>Code:</strong> {book?.code || '123'}
          </p>
        </figcaption>
      </div>
      <div
        className='flex-row align w-quarter bookCategory'
        style={{ justifyContent: 'flex-start' }}
      >
        {issueDate && (
          <div
            className={`py-1 category px-2 m-2 text-sm rounded-md bg-green-500
          } text-white 2xl:text-xl`}
          >
            {formatDueDate(issueDate, true)}
          </div>
        )}
        <div
          className={`category issueBookDate  text-sm rounded-md capitalize  ${
            expiryDate ? 'bg-red-500' : ''
          } `}
        >
          {expiryDate
            ? formatDueDate(expiryDate)
            : mapCategory(book?.category) || 'Science'}
        </div>
      </div>
      <div className='flex-row align bookInfo bookInfoBtn'>
        <button
          onClick={toggleModal}
          className='bookDetailBtn px-2 flex-row align'
        >
          View Details <DownArrowSVG />
        </button>
      </div>
      {modal && (
        <BookDetails
          open={modal}
          toggleModal={toggleModal}
          book={book}
          id={book?._id}
          category={mapCategory(book?.category, book?.category?.length)}
        />
      )}
    </div>
  );
});

const BookCards = ({ books }) => {
  return (
    <section id='book'>
      {books.map((book) => (
        <BookCard book={book} key={book?._id} />
      ))}
    </section>
  );
};

export default BookCards;
