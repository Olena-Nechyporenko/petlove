import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container, Main } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Loading</div>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Container>
  );
};
