import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  font-size: 24px;
  padding-bottom: 5px;
  padding-top: 5px;
  font-weight: bold;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: black;

  :hover,
  :focus {
    background-color: #d9d9d9;
    border-radius: 5px;
  }
`;
