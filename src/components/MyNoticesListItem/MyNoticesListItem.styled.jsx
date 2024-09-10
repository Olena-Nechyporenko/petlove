import styled from 'styled-components';
import { FaStar } from 'react-icons/fa6';

export const NoticesItem = styled.li`
  background: var(--light-color);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
    padding: 14px 14px 18px 14px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 24px) / 2);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  overflow: hidden;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    height: 162px;
    margin-bottom: 14px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 178px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 162px;
  }
`;

export const TitleRatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #2b2b2a;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Rating = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  color: #2b2b2a;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RatingIcon = styled(FaStar)`
  width: 16px;
  height: 16px;
  fill: #ffc531;
`;

export const DescriptionList = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 14px;
  }
`;

export const DescrItem = styled.li`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DescrInfo = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #2b2b2a;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const LearnMoreWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const LearnMoreButton = styled.button`
  flex-grow: 1;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--light-color);
  background-color: var(--accent-color);
  border: none;
  border-radius: 30px;
  padding: 14px 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 12px 0;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff4df;
  border: none;
  border-radius: 30px;
  width: 46px;
  height: 46px;
  padding: 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }
`;
