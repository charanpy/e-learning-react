import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import ErrorBoundary from "../components/ErrorBoundary";
import Login from "../pages/login/Login.page";
import VideoBannerComponent from "../components/video-details/VideoBanner.component";

const HomePage = lazy(() => import("../pages/home/Home.page"));
const DashboardPage = lazy(() => import("../pages/dashboard/Dashboard.page"));
const NotFoundPage = lazy(() => import("../pages/not-found/NotFound.page"));
const CourseDetails = lazy(() =>
  import("../pages/course-details/CourseDetails.pages")
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading</div>}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              exact
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PageTransition>
                  <DashboardPage />
                </PageTransition>
              }
            />
            <Route
              path="/login"
              element={
                <PageTransition>
                  <Login />
                </PageTransition>
              }
            />
            <Route
              path="/dashboard/:id"
              element={
                <PageTransition>
                  <DashboardPage />
                </PageTransition>
              }
            />
            <Route
              path="/course/:id"
              element={
                <PageTransition>
                  <CourseDetails />
                </PageTransition>
              }
            />
            <Route
              path="/video"
              element={
                <PageTransition>
                  <VideoBannerComponent />
                </PageTransition>
              }
            />
            <Route
              basename="dashboard"
              path="*"
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
