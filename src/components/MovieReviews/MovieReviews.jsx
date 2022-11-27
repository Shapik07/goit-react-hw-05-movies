import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieReviews } from 'services/api';
import {
  List,
  ItemList,
  Author,
  AuthorReview,
} from 'components/MovieReviews/MovieReviews.styled';

const MovieReviews = () => {
  const { details } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    GetMovieReviews(details).then(data => {
      if (!data) {
        toast.warn('Wooops, something went wrong');
        return;
      } else {
        setReviews(data.results);
      }
    });
  }, [details]);

  return (
    <List>
      {reviews.map(({ author, content, id }) => (
        <ItemList key={id}>
          <Author>
            {author}: <AuthorReview>{content}</AuthorReview>
          </Author>
        </ItemList>
      ))}
      <ToastContainer />
    </List>
  );
};

export default MovieReviews;
