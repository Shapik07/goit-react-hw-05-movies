import { Header } from './Layout.styled';
import { AppBar } from '../AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <Header>
        <AppBar />
      </Header>
      <Outlet />
    </div>
  );
};
