import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieCredits } from 'services/api';

import {
  List,
  ListItem,
  Image,
  ActorName,
  Info,
  InfoText,
} from './Casts.styled';

const MovieCredits = () => {
  const { details } = useParams();
  const [credits, setCredits] = useState([]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    GetMovieCredits(details).then(data => {
      if (!data) {
        toast.warn('Wooops, something went wrong');
        return;
      } else {
        setCredits(data.cast);
      }
    });
  }, [details]);

  return (
    <List>
      {credits.map(({ profile_path, original_name, character, id }) => (
        <ListItem key={id}>
          <Image
            src={
              profile_path
                ? IMG_URL + profile_path
                : 'https://cloupyblob.blob.core.windows.net/cloupy/image-not-found.png'
            }
            alt={original_name}
          ></Image>
          <ActorName>{original_name}</ActorName>
          <Info>
            Character: <InfoText>{character}</InfoText>
          </Info>
        </ListItem>
      ))}
      <ToastContainer />
    </List>
  );
};

export default MovieCredits;
