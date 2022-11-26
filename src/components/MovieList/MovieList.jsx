import { useState, useEffect } from 'react';
import { GetTrendingMovies } from 'services/api';
import { Container, MovieLink, List, ListItem } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    GetTrendingMovies().then(data => {
      if (data.results === 0) {
        return;
      } else {
        setMovies(data.results);
      }
    });
  }, []);

  return (
    <Container>
      <List>
        {movies.map(({ title, id }) => (
          <ListItem key={id}>
            <MovieLink id={id} to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
