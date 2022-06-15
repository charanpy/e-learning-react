import React from 'react';
import { opacityModal } from '../../course-video/CourseVideoTabs.component';
import CloseSVG from '../../shared/svg/Close.svg';
import Slider from '../../slider/Slider.component';
import defaultBook from '../../../assets/defaultBook.jpg';
import Button from '../../shared/button/Button.component';

const BookInfo = ({ header, value, ...props }) => {
  return (
    <>
      {value ? (
        <p>
          <span className='bookSubText'>{header}:</span>
          <span className='bookText' {...props}>
            {value}
          </span>
        </p>
      ) : (
        ''
      )}
    </>
  );
};

const BookDetails = ({ open, book, toggleModal, category }) => {
  return (
    <Slider open={open} variants={opacityModal} className='bookDetailPopup'>
      <div className='bookDetailWrap'>
        <header className='bookDetailHeader flex-row jus-between'>
          <h1>Book Details</h1>
          <Button onClick={toggleModal}>
            <CloseSVG />
          </Button>
        </header>
        <div className=' flex-col justify align'>
          <section style={{ margin: '2rem 0' }}>
            <img
              src={book?.image?.url || defaultBook}
              alt='book'
              width='180px'
              height='180px'
              style={{ objectFit: 'cover' }}
            />
          </section>
          <section className='bookDetailInfo bookDetailContainer'>
            <div>
              <h1 className='bookTitle'>{book?.title}</h1>
            </div>
            <div className='flex-row align'>
              <div className='profileImage flex-row centerAll'>
                <p className='capitalize'>
                  {book?.author?.authorName?.[0] || 'A'}
                </p>
              </div>
              <h3 className='bookSubText ml-2 capitalize'>
                {book?.author?.authorName}
              </h3>
            </div>
            <div>
              <p className='bookDescription'>{book?.description}</p>
            </div>
            <div className='bookDescription'>
              <BookInfo header='Access Code' value={book?.accessCode} />
              <BookInfo
                header='Status'
                value={book?.totalBooks ? 'Available' : 'Not Available'}
                style={{
                  color: `${book?.totalBooks ? 'var(--green)' : 'var(--red)'}`,
                }}
              />
              <BookInfo header='Category' value={category} />
              <BookInfo header='Publisher' value={book?.publisher} />
              <BookInfo header='Book Count' value={book?.totalBooks} />
              <BookInfo header='Price' value={book?.price} />
              <BookInfo header='Edition' value={book?.edition} />
              <BookInfo header='Language' value={book?.language} />
            </div>
          </section>
        </div>
      </div>
    </Slider>
  );
};

export default BookDetails;
