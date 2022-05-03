import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FullPageLoader from '../components/shared/loader/FullPageLoader.component';
import request from '../lib/fetch';
import { errorToaster, successToaster } from '../lib/toast';
import { removeItem, setItem } from '../lib/token';

const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUser] = useState({ user: null, loading: true });
  const [loading, setLoading] = useState(false);

  const { user, loading: authLoading } = userData;

  const setProfileImage = (image) => {
    const prevUser = user;
    prevUser['image'] = image;
    setUser((prev) => ({ ...prev, user: prevUser }));
  };

  const getMe = async () => {
    try {
      const data = await request('/student/me', 'GET', null, true, false);
      setItem(data?.role === 'student' ? 1 : 0, 'roleType');

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
      setItem(res?.student?.role === 'student' ? 1 : 0, 'roleType');
      navigate('/dashboard');
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

  const logout = () => {
    removeItem();
    setUser((prev) => ({ ...prev, loading: false, user: null }));
    navigate('/auth');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        handleLogin,
        handleRegister,
        logout,
        setProfileImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
