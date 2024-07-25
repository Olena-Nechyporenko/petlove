import styled from 'styled-components';
import { FaStar } from 'react-icons/fa6';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';

export const Item = styled.li`
  background: var(--light-color);
  border-radius: 16px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 64px) / 3);
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  height: 178px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const Img = styled.img`
  width: 100%;
  height: 178px;
  object-fit: cover;
  object-position: center;
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
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
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
  display: inline-block;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
  text-transform: capitalize;
  min-height: 30px;
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

  @media screen and (min-width: 1280px) {
    margin-bottom: 50px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
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
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 30px;
  background-color: #fff4df;
  width: 48px;
  height: 48px;
  padding: 0;
  cursor: pointer;
`;

export const EmptyHeartIcon = styled(IoIosHeartEmpty)`
  fill: var(--accent-color);
  width: 20px;
  height: 20px;
`;

export const FillHeartIcon = styled(IoMdHeart)`
  fill: var(--accent-color);
  width: 20px;
  height: 20px;
`;
