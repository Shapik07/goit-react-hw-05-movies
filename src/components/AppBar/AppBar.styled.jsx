import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const Header = styled.header`
  width: 100%;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: red;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
    0 0 40px #ff0000, 0 0 80px #ff0000, 0 0 90px #ff0000, 0 0 100px #ff0000,
    0 0 150px #ff0000;
  font-size: 36px;

  &.active {
    border-bottom: 1px solid white;
    color: green;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff,
      0 0 40px #00ff00, 0 0 80px #00ff00, 0 0 90px #00ff00, 0 0 100px #00ff00,
      0 0 150px #00ff00;
  }
`;
