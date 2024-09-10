import styled from 'styled-components';

export const MyNoticesSection = styled.section`
  padding: 40px 0 80px;

  @media screen and (min-width: 768px) {
    padding: 32px 0 80px;
  }

  @media screen and (min-width: 1280px) {
    flex: 1;
    padding: 40px 0 64px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 32px;
  }
`;

export const FavoriteButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${props =>
    props.value ? 'var(--light-color)' : 'var(--main-txt-color)'};
  background-color: ${props =>
    props.value ? 'var(--accent-color)' : 'var(--light-color)'};
  border: none;
  border-radius: 30px;
  padding: 12px;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px;
  }

  &:hover {
    background-color: #f9b020;
  }
`;

export const ViewedButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: ${props =>
    props.value ? 'var(--light-color)' : 'var(--main-txt-color)'};
  background-color: ${props =>
    props.value ? 'var(--accent-color)' : 'var(--light-color)'};
  border: none;
  border-radius: 30px;
  padding: 12px 38px;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 45px;
  }

  &:hover {
    background-color: #f9b020;
  }
`;

export const NoticesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1280px) {
    padding-right: 8px;
    gap: 24px;

    height: 830px;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(38, 38, 38, 0.08);
      border-radius: 13px;
    }
  }
`;

export const NoAnimalWrapp = styled.div`
  padding-top: 60px;

  @media screen and (min-width: 768px) {
    padding-top: 160px;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 148px;
  }
`;

export const NoAnimalsText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--main-txt-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    width: 458px;
    margin: 0 auto;
  }
`;

export const HighlightedWords = styled.span`
  font-weight: 700;
  color: var(--accent-color);
`;
