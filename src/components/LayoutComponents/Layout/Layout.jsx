import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/LayoutComponents/Header/Header';
import { Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<></>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Container>
  );
};
