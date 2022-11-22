import { useState, useEffect } from 'react';
import { GetTrendingMovies } from 'services/api';
import { Container, MovieLink } from './MovieList.styled';

export const MovieList = () => {
  const [movies, setMovies] = useState([]);

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
      {movies.map(({ title, id }) => (
        <MovieLink key={id}>{title}</MovieLink>
      ))}
    </Container>
  );
};
