import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GetSearchMovies } from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.input.value.trim();

    if (!query) {
      return;
    } else {
      GetSearchMovies(query).then(data => setMovies(data.results));
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, original_title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`}>{original_title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
