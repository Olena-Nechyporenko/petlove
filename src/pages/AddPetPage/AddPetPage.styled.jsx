import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 213px;
  border-radius: 30px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    height: 248px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
    height: 654px;
    box-sizing: border-box;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 213px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 248px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
    height: 654px;
  }
`;
