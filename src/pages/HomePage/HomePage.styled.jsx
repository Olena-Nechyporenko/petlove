import styled from 'styled-components';

export const ImageWrapper = styled.section`
  width: 100%;
  height: 402px;
  border-radius: 30px;
  overflow: hidden;
  background-color: var(--main-accent-color);

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    height: 496px;
  }

  @media screen and (min-width: 1280px) {
    height: 384px;
  }
`;
