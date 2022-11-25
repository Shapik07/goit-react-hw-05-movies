import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { GetMovieDetails } from 'services/api';
import {
  Container,
  Card,
  PictureThumb,
  Picture,
  InfoList,
  ListItem,
  MovieTitle,
  Info,
  InfoLink,
  AdditionalInfoList,
  Title,
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
    <>
      <Container>
        {movie && (
          <Card>
            <PictureThumb>
              <Picture
                src={
                  poster_path
                    ? IMG_URL + poster_path
                    : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'
                }
                title={original_title}
              ></Picture>
            </PictureThumb>
            <InfoList>
              <ListItem>
                <MovieTitle>{original_title}</MovieTitle>
              </ListItem>
              <ListItem>
                User core:
                <Info> {Math.round(vote_average * 10)} %</Info>
              </ListItem>
              <ListItem>
                Overview:
                <Info> {overview}</Info>
              </ListItem>
              <ListItem>
                Genres:
                <Info> {getGenres()}</Info>
              </ListItem>
            </InfoList>
          </Card>
        )}
      </Container>

      <Container>
        <Title>Additional information</Title>
        <AdditionalInfoList>
          <ListItem>
            <InfoLink to="cast">Cast</InfoLink>
          </ListItem>
          <ListItem>
            <InfoLink to="reviews">Reviews</InfoLink>
          </ListItem>
        </AdditionalInfoList>
      </Container>
      <Outlet />
    </>
  );
};
