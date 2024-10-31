import styled from 'styled-components';

export const NoticesListContainer = styled.div`
  position: relative;
  min-height: 400px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
    padding: 40px 32px 0;
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

export const NoNoticesText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-align: center;
  color: var(--main-dark-txt-color);
  padding-top: 50px;
`;
