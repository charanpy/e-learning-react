import { createContext, useContext, useEffect, useState } from 'react';
import FullPageLoader from '../components/shared/loader/FullPageLoader.component';
import request from '../lib/fetch';
import { errorToaster, successToaster } from '../lib/toast';
import { setItem } from '../lib/token';

const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userData, setUser] = useState({ user: null, loading: true });
  const [loading, setLoading] = useState(false);

  const { user, loading: authLoading } = userData;

  const getMe = async () => {
    try {
      const data = await request('/student/me', 'GET', null, true, false);
      setUser((prev) => ({ ...prev, loading: false, user: data }));
    } catch (error) {
      setUser((prev) => ({ ...prev, loading: false, user: null }));
    }
  };

  useEffect(() => {
    getMe();
  }, []);

  if (authLoading) return <FullPageLoader />;

  const handleLogin = async (email, password) => {
    if (!email || !password) return errorToaster('Invalid Credentials');
    try {
      setLoading((load) => !load);
      const res = await request('/student/login', 'POST', { email, password });
      successToaster('Logged in successfully');
      setUser((prev) => ({ ...prev, user: res?.student }));
      setItem(res?.token);
    } catch (error) {
    } finally {
      setLoading((load) => !load);
    }
  };

  const handleRegister = async (data) => {
    try {
      setLoading((load) => !load);
      const { role, rollNumber, email, password, dob, mobileNumber, name } =
        data;

      if (role === 'student' && !rollNumber)
        return errorToaster('RollNumber is required');

      if (!role || !email || !password || !dob || !mobileNumber || !name)
        return errorToaster('Please fill all fields');

      await request('/student', 'POST', data);
      return successToaster(
        'Register successfully.Email will be sent once verified'
      );
    } catch (error) {
    } finally {
      setLoading((load) => !load);
    }
  };

  return (
    <UserContext.Provider
      value={{ user, loading, handleLogin, handleRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
