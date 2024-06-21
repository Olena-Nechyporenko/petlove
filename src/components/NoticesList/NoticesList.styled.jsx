import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px 32px;
    padding: 40px 32px 60px;
  }
`;
