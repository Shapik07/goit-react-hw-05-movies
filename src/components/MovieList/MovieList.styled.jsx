import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li``;

export const MovieLink = styled(Link)`
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
  color: black;

  :hover,
  :focus {
    background-color: #d9d9d9;
    border-radius: 5px;
  }
`;
