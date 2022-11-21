import { Routes, Route } from 'react-router-dom';
import { Layout } from '../Layout/Layout';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';

export const App = () => {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<div>Movies</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};
