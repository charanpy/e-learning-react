import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';
import ErrorBoundary from '../components/ErrorBoundary';
import PrivateRoute from './PrivateRoutes';

const HomePage = lazy(() => import('../pages/home/Home.page'));
const DashboardPage = lazy(() => import('../pages/dashboard/Dashboard.page'));
const NotFoundPage = lazy(() => import('../pages/not-found/NotFound.page'));
const CourseDetails = lazy(() =>
  import('../pages/course-details/CourseDetails.pages')
);
const ExploreCourse = lazy(() =>
  import('../pages/explore-course/ExploreCourse.page')
);
const LoginPage = lazy(() => import('../pages/login/Login.page'));
const MyCoursePage = lazy(() => import('../pages/my-course/MyCourse.page'));

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
              path='/dashboard'
              element={
                <PrivateRoute>
                  <PageTransition>
                    <DashboardPage />
                  </PageTransition>
                </PrivateRoute>
              }
            />

            <Route
              path='/course/:id'
              element={
                <PrivateRoute>
                  <PageTransition>
                    <CourseDetails />
                  </PageTransition>
                </PrivateRoute>
              }
            />

            <Route
              path='/explore'
              element={
                <PrivateRoute>
                  <PageTransition>
                    <ExploreCourse />
                  </PageTransition>
                </PrivateRoute>
              }
            />

            <Route
              path='/my-course'
              element={
                <PrivateRoute>
                  <PageTransition>
                    <MyCoursePage />
                  </PageTransition>
                </PrivateRoute>
              }
            />

            <Route
              path='/auth'
              element={
                <PageTransition>
                  <LoginPage />
                </PageTransition>
              }
            />

            <Route
              path='*'
              element={
                <PageTransition>
                  <NotFoundPage />
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
