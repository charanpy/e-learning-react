import { useState } from 'react';
import { useQuery } from 'react-query';
import request from '../../lib/fetch';

const filterRequest = (filter, code) => {
  const filterParam = filter ? `courseTitle=${filter}` : '';
  const codeParam = code ? `&code=${code}` : '';

  return request(`/course?${filterParam}${codeParam}`);
};

const useCourse = () => {
  console.log('container');
  const [filter, setFilter] = useState({
    code: '',
    title: '',
  });

  const { code, title } = filter;
  const { data, isLoading } = useQuery(['course', code, title], () =>
    filterRequest(title, code)
  );

  return [data, isLoading, setFilter, code, filter];
};

export default useCourse;
