import styled from 'styled-components';

export const NewsListContainer = styled.div`
  position: relative;
  min-height: 400px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 32px 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px 35px;
    padding: 0 32px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 44px 0 80px;

  @media screen and (min-width: 768px) {
    padding: 60px 0 80px;
  }
`;

export const NoNewsText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-align: center;
  color: var(--main-dark-txt-color);
  padding-top: 50px;
`;
