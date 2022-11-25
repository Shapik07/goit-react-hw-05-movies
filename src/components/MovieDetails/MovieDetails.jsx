import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieDetails } from 'services/api';
import {
  Container,
  Card,
  Picture,
  InfoList,
  ListItem,
  MovieTitle,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { details } = useParams();
  const [movie, setMovie] = useState([]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    GetMovieDetails(details).then(data => {
      if (!data) {
        return;
      } else {
        setMovie(data);
      }
    });
  }, [details]);

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  const getGenres = () => {
    if (genres) {
      return genres.reduce(
        (acc, genre) => acc + `${acc ? ', ' : ''}${genre.name}`,
        ''
      );
    }
  };

  return (
    <Container>
      {movie && (
        <Card>
          <Picture src={IMG_URL + poster_path} title={original_title}></Picture>

          <InfoList>
            <ListItem>
              <MovieTitle>{original_title}</MovieTitle>
            </ListItem>
            <ListItem>
              User core: <span>{Math.round(vote_average * 10)} %</span>
            </ListItem>
            <ListItem>
              Overview: <span>{overview}</span>
            </ListItem>
            <ListItem>
              Genres: <span>{getGenres()}</span>
            </ListItem>
          </InfoList>
        </Card>
      )}
    </Container>
  );
};
