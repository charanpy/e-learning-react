import React from 'react';
import { Outlet } from 'react-router-dom';
import LibraryDashboard from '../../components/library-dashboard/LibraryDashboard.component';
import Layout from '../../layout';

const LibraryPage = () => {
  return (
    <Layout>
      <LibraryDashboard />
      <Outlet />
    </Layout>
  );
};

export default LibraryPage;
