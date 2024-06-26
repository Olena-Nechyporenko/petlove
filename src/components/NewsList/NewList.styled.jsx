import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px 35px;
    padding: 0 32px;
  }
`;
