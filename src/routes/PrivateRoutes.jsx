import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserProvider';

const PrivateRoute = ({ children, role = '' }) => {
  const { user } = useUser();
  const location = useLocation();
  if (!user?.email || !user?._id) {
    return <Navigate to='/auth' state={{ from: location }} replace />;
  }

  if (role) {
    if (user?.role !== role)
      return <Navigate to='/dashboard' state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
