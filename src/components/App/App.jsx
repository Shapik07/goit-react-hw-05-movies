import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { MovieCredits } from 'components/Casts/Casts';
import { MovieReviews } from 'components/MovieReviews/MovieReviews';

export const App = () => {
  return (
    <>
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
    </>
  );
};
