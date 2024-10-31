import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 32px;
    left: 32px;
    display: flex;
    gap: 8px;
    border-radius: 30px;
    background-color: var(--main-light-txt-color);
    width: 294px;
    padding: 16px;
    box-sizing: border-box;
  }

  @media screen and (min-width: 1280px) {
    bottom: 97px;
    left: 60px;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-accent-color);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  overflow: hidden;
`;

export const DescriptionWrapper = styled.div`
  flex: 1;
`;

export const NameAndBirthdayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--main-accent-color);
`;

export const BirthdayTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--secondary-dark-txt-color);
`;

export const BirthdayDate = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--main-dark-txt-color);
`;

export const AnimalDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.8);
`;
