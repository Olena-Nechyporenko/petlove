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

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 213px;
  border-radius: 30px;
  overflow: hidden;
  background-color: var(--main-accent-color);
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    height: 248px;
    border-radius: 60px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 592px;
    height: 654px;
    margin-bottom: 0;
  }
`;
