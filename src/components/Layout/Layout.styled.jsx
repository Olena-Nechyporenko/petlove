import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 375px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Main = styled.main`
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }
`;
