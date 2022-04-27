import { errorToaster } from './toast';

const getToken = () => localStorage.getItem('eToken');

const getHeaders = (method, isAuth = false) => {
  const headers = {};
  if (method === 'GET') return;

  if (isAuth) headers['authorization'] = getToken();

  if (method === 'POST') {
    headers['Content-Type'] = 'application/json';
  }
  return headers;
};

const apiURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001/api/v2';

const request = async (endpoint, method, body, isAuth, showError = true) => {
  const headers = getHeaders(method, isAuth);

  const res =
    method === 'GET'
      ? await fetch(`${apiURL}${endpoint}`, {
          headers,
        })
      : await fetch(`${apiURL}${endpoint}`, {
          headers,
          body: JSON.stringify(body),
        });

  const data = await res.json();

  if (data?.status === 'error' || data?.status === 'fail') {
    if (showError) errorToaster(data?.message || 'Something went wrong');
    throw new Error(data?.message || 'Something went wrong');
  }
  return data;
};

export default request;
