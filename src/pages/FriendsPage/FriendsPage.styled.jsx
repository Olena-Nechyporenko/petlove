import styled from 'styled-components';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);
  padding-top: 18px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    padding: 54px 0 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 64px 32px 40px;
  }
`;
