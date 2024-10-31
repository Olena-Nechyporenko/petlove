import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-bottom: 30px;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 32px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  border-radius: 30px;
  overflow: hidden;
  background-color: var(--main-accent-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    height: 302px;
    border-radius: 60px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
    height: 654px;
    margin-bottom: 0;
  }
`;
