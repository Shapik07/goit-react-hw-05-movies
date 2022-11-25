import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:details" element={<MovieDetails />}></Route>
        </Route>
      </Routes>
    </>
  );
};
