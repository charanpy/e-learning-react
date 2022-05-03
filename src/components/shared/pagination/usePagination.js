import { useState } from 'react';

const usePaginate = (pageData) => {
  const [currentPageData, setPage] = useState({
    page: 0,
    data: pageData.slice(0, 10),
    totalPage: Math.ceil(pageData.length / 10),
  });

  const { page, data, totalPage } = currentPageData;
  const handleNext = () => {
    if (page + 1 === totalPage) return;
    const nextPage = page + 1;
    setPage((prev) => ({
      ...prev,
      data: pageData.slice(nextPage * 10, (nextPage + 1) * 10),
      page: prev.page + 1,
    }));
  };

  const handlePrev = () => {
    if (page === 0) return;
    setPage((prev) => ({
      ...prev,
      data: pageData.slice((page - 1) * 10, page * 10),
      page: prev.page - 1,
    }));
  };

  return [page, data, totalPage, handleNext, handlePrev];
};

export default usePaginate;
