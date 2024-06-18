import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Container, Main } from './Layout.styled';

export const Layout = () => {
  const params = useParams();
  const isHomePage = (Object.keys(params).length === 0).toString();
  // console.log(isHomePage);
  return (
    <Container>
      <Header ishomepage={isHomePage} />
      <Suspense fallback={<div>Loading</div>}>
        <Main>
          <Outlet />
        </Main>
      </Suspense>
    </Container>
  );
};
