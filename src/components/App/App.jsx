import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const MovieCredits = lazy(() => import('components/Casts/Casts'));
const MovieReviews = lazy(() => import('components/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:details" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCredits />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
