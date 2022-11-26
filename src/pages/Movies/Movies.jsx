import { useState } from 'react';
import { GetSearchMovies } from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Container, List, ListItem, MovieLink } from './Movies.styled';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchparams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.input.value.trim();

    if (!searchparams) {
      return;
    } else {
      GetSearchMovies(query).then(data => setMovies(data.results));
      setSearchParams({ query: query });
      form.reset();
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <List>
          {movies.map(({ id, original_title }) => (
            <ListItem key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                - {original_title}
              </MovieLink>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};
