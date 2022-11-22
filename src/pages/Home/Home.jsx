import { MovieList } from 'components/MovieList/MovieList';
import { Container, Title } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <Title>Trending today</Title>
      <MovieList />
    </Container>
  );
};
