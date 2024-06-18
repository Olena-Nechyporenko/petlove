import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 8px;
    position: absolute;
    bottom: 97px;
    left: 60px;
    border-radius: 30px;
    background-color: var(--light-color);
    padding: 16px;
  }
`;

export const ImageWrapper = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 60px;
  height: 60px;
`;

export const DescriptionWrapper = styled.div`
  width: 194px;
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
  color: var(--accent-color);
`;

export const BirthdayTitle = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
`;

export const BirthdayDate = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
`;

export const AnimalDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.8);
`;
