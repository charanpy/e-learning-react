import { errorToaster } from './toast';
import { getItem } from './token';

const getHeaders = (method, isAuth = false) => {
  const headers = {};
  if (isAuth) headers['authorization'] = getItem();
  if (method === 'GET') return headers;

  if (method === 'POST') {
    headers['Content-Type'] = 'application/json';
  }
  return headers;
};

export const apiURL =
  'http://localhost:3001/api/v2' || process.env.REACT_APP_BASE_URL;

const request = async (
  endpoint,
  method,
  body,
  isAuth = false,
  showError = true
) => {
  const headers = getHeaders(method, isAuth);

  const res =
    method === 'GET'
      ? await fetch(`${apiURL}${endpoint}`, {
          headers,
        })
      : await fetch(`${apiURL}${endpoint}`, {
          headers,
          body: JSON.stringify(body),
          method,
        });

  const data = await res.json();

  if (data?.status === 'error' || data?.status === 'fail') {
    if (showError) errorToaster(data?.message || 'Something went wrong');
    throw new Error(data?.message || 'Something went wrong');
  }
  return data;
};

export default request;
