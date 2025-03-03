import styled from 'styled-components';

export const FriendsListContainer = styled.div`
  position: relative;
  min-height: 400px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1280px) {
    gap: 28px 20px;
    padding: 0 32px 80px;
  }
`;
