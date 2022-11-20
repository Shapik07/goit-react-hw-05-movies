import { NavLink } from 'react-router-dom';

const navigationItems = [
  { href: 'home', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <header>
      <nav>
        {navigationItems.map(({ href, text }) => (
          <NavLink to={href} key={href}>
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};
