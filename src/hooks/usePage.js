import { useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const usePage = (length = 0) => {
  const [pageData, setPageData] = useState({
    page: 0,
    totalPage: 2,
  });

  const setInitial = () => {
    setPageData((prev) => ({ ...prev, page: 0, totalPage: 0 }));
  };

  const { page, totalPage } = pageData;

  const handleNext = () => {
    if (page + 1 === totalPage) return;
    setPageData((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
    scrollToTop();
  };

  const handlePrev = () => {
    if (page === 0) return;
    setPageData((prev) => ({
      ...prev,
      page: prev.page - 1,
    }));
    scrollToTop();
  };

  const setTotalPage = (totalPages) => {
    if (!totalPages < 0) return;
    setPageData((prev) => ({
      ...prev,
      totalPage: totalPages === 0 ? 1 : Math.ceil(totalPages / 10),
    }));
  };

  return [page, totalPage, handlePrev, handleNext, setTotalPage, setInitial];
};

export default usePage;
