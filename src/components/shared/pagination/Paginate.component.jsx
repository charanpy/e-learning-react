import React from 'react';
import Button from '../button/Button.component';
import BackArrowSVG from '../svg/BackArrow.svg';
import RightArrowSVG from '../svg/RightArrow.svg';
import usePaginate from './usePagination';

const Pagination = (props) => {
  const { Component } = props;
  const [page, data, totalPage, handleNext, handlePrev] = usePaginate(
    props.data,
    props?.currPage
  );
  return (
    <>
      <div className='videoSyllabusHeader flex-row align'>
        <h1>{props?.header}</h1>
        <div className=' flex-row align'>
          {page !== 0 && (
            <Button className='videoIco' onClick={handlePrev}>
              <BackArrowSVG />
            </Button>
          )}
          <span className='totalPage'>
            {page + 1}-{totalPage}
          </span>
          {page + 1 !== totalPage && (
            <Button className='videoIco' onClick={handleNext}>
              <RightArrowSVG />
            </Button>
          )}
        </div>
      </div>
      <Component {...props} page={page} data={data} />
    </>
  );
};

export default Pagination;
