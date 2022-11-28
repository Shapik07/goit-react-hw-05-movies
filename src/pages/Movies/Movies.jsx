import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MovieList } from 'components/MovieList/MovieList';
import { Container } from './Movies.styled';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.input.value.trim();

    if (!query) {
      return toast.warn('Please enter movie name');
    } else {
      setSearchParams({ query });
      form.reset();
    }
  };

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit} />
      {query && <MovieList query={query} />}
      <ToastContainer />
    </Container>
  );
};

export default Movies;
