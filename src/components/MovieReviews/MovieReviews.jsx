import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieReviews } from 'services/api';
import {
  List,
  ItemList,
  Author,
  AuthorReview,
} from 'components/MovieReviews/MovieReviews.styled';

export const MovieReviews = () => {
  const { details } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    GetMovieReviews(details).then(data => {
      if (!data) {
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
    </List>
  );
};
