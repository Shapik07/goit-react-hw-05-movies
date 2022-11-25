import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MovieLink = styled(NavLink)`
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
