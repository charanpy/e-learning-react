import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage = lazy(() => import('../pages/home/Home.page'));
const DashboardPage = lazy(() => import('../pages/dashboard/Dashboard.page'));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading</div>}>
        <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path='/'
            element={
              <PageTransition>
              <HomePage />
              </PageTransition>
            }
          />
          <Route
            exact
            path='/dashboard'
            element={
              <PageTransition>
                <DashboardPage />
              </PageTransition>
            }
          />
        </Routes>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
