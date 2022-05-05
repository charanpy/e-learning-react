import React from 'react';
import '../../library-dashboard/library-dashboard.css';
import Button from '../button/Button.component';
import BackArrowSVG from '../svg/BackArrow.svg';
import RightArrowSVG from '../svg/RightArrow.svg';
import './paginate.css';

const PaginateArrow = ({ setPrev, setNext, currentPage, totalPage }) => {
  return (
    <section className='flex-row align justify align paginateWrapper'>
      {currentPage !== 0 && (
        <Button
          className='iconContainer flex-row align mrIcon justify'
          onClick={setPrev}
        >
          <BackArrowSVG />
        </Button>
      )}
      <div>
        <p className='paginateText mrIcon'>
          {currentPage + 1}-{totalPage}
        </p>
      </div>
      {currentPage + 1 !== totalPage && (
        <Button
          className='iconContainer flex-row align mrIcon justify'
          onClick={setNext}
        >
          <RightArrowSVG />
        </Button>
      )}
    </section>
  );
};

export default PaginateArrow;
