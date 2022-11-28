import { TrendyList } from 'components/TrendyList/TrendyList';
import { Container, Title } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <Title>Trending today</Title>
      <TrendyList />
    </Container>
  );
};

export default Home;
