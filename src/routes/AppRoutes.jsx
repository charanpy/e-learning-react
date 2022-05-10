import React, { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './PageTransition';
import ErrorBoundary from '../components/ErrorBoundary';
import PrivateRoute from './PrivateRoutes';
import FullPageLoader from '../components/shared/loader/FullPageLoader.component';

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
const CourseVideo = lazy(() =>
  import('../pages/course-video/CourseVideo.page')
);
const ProfilePage = lazy(() => import('../pages/profile/Profile.page'));
const LibraryPage = lazy(() => import('../pages/library/Library.page'));
const BooksPage = lazy(() => import('../pages/books/Books.page'));
const IssuedBook = lazy(() =>
  import('../components/issurd-book/IssuedBook.component')
);
const ExploreBooks = lazy(() =>
  import('../pages/explore-books/ExploreBooks.page')
);
const AuthorPage = lazy(() => import('../pages/authors/Authors.page'));
const MaterialsPage = lazy(() => import('../pages/materials/Materials.page'));

const AppRoutes = () => {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <Suspense fallback={<FullPageLoader />}>
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
              path='/video/:courseId'
              element={
                <PrivateRoute>
                  <PageTransition>
                    <CourseVideo />
                  </PageTransition>
                </PrivateRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <PrivateRoute>
                  <PageTransition>
                    <ProfilePage />
                  </PageTransition>
                </PrivateRoute>
              }
            />

            <Route
              path='/library'
              element={
                <PrivateRoute role='student'>
                  <PageTransition>
                    <LibraryPage />
                  </PageTransition>
                </PrivateRoute>
              }
            >
              <Route
                path='books'
                element={
                  <PageTransition>
                    <BooksPage />
                  </PageTransition>
                }
              />
              <Route
                path='issue-book'
                element={
                  <PageTransition>
                    <IssuedBook name='issue-book-list' />
                  </PageTransition>
                }
              />
              <Route
                path='return-book'
                element={
                  <PageTransition>
                    <IssuedBook name='return-book-list' />
                  </PageTransition>
                }
              />
              <Route
                path='explore-books'
                element={
                  <PageTransition>
                    <ExploreBooks />
                  </PageTransition>
                }
              />
              <Route
                path='authors'
                element={
                  <PageTransition>
                    <AuthorPage />
                  </PageTransition>
                }
              />
              <Route
                path='material'
                element={
                  <PageTransition>
                    <MaterialsPage />
                  </PageTransition>
                }
              />
            </Route>

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
