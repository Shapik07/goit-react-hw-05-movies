import { Navigation, Header, StyledLink } from './AppBar.styled';

const navigationItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <Header>
      <Navigation>
        {navigationItems.map(({ href, text }) => (
          <StyledLink to={href} key={href}>
            {text}
          </StyledLink>
        ))}
      </Navigation>
    </Header>
  );
};
