import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieLink, List, ListItem } from './MovieList.styled';
import { GetSearchMovies } from 'services/api';
import { useLocation } from 'react-router-dom';

export const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    (async function getMovies() {
      try {
        const data = await GetSearchMovies(query);
        if (data.results.length === 0) {
          toast.warn('Woops, something went wrong');
          return;
        }
        setMovies(data.results);
      } catch (error) {
        toast.warn('Woops, something went wrong');
      }
    })();
  });

  return (
    <ul>
      <List>
        {movies.map(({ id, original_title }) => (
          <ListItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              - {original_title}
            </MovieLink>
          </ListItem>
        ))}
        <ToastContainer />
      </List>
    </ul>
  );
};
