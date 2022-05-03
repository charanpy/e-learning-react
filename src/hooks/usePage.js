import { useState } from 'react';

const usePage = (length) => {
  const [pageData, setPageData] = useState({
    page: 0,
    totalPage: Math.ceil(length / 10),
  });

  const { page, totalPage } = pageData;

  const handleNext = () => {
    if (page + 1 === totalPage) return;
    setPageData((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  const handlePrev = () => {
    if (page === 0) return;
    setPageData((prev) => ({
      ...prev,
      data: pageData.slice((page - 1) * 10, page * 10),
      page: prev.page - 1,
    }));
  };

  return [page, handlePrev, handleNext];
};

export default usePage;
