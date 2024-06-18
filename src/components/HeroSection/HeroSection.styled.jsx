import styled from 'styled-components';

export const Hero = styled.section`
  position: relative;
  z-index: 900;
  border-radius: 30px;
  background-color: var(--accent-color);
  margin-top: -100px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 118px 20px 50px;

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    gap: 32px;
    padding: 178px 32px 44px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding: 178px 64px 32px;
  }
`;

export const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 0.96;
  letter-spacing: -0.03em;
  color: var(--light-color);

  @media screen and (min-width: 768px) {
    font-size: 80px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 90px;
    max-width: 760px;
  }
`;

export const TitleHighlightedWord = styled.span`
  color: rgba(255, 255, 255, 0.4);
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--light-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
    width: 255px;
  }
`;
