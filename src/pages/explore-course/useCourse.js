import { useState } from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';

const filterRequest = (filter, code, page) => {
  const filterParam = filter ? `courseTitle=${filter}` : '';
  const codeParam = code ? `&code=${code}` : '';

  return request(`/course?page=${page + 1}&${filterParam}${codeParam}`);
};

const useCourse = (page) => {
  console.log('container');
  const [filter, setFilter] = useState({
    code: '',
    title: '',
  });

  const { code, title } = filter;
  const { data, isLoading } = useQuery(['course', code, title, page + 1], () =>
    filterRequest(title, code, page)
  );

  return [data, isLoading, setFilter, code, filter];
};

export default useCourse;
