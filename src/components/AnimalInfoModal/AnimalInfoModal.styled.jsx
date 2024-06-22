import styled from 'styled-components';
import { FaStar } from 'react-icons/fa6';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(38, 38, 38, 0.3);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 200px;
  width: 335px;
  border-radius: 30px;
  background-color: var(--light-color);

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    width: 473px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 28px;

  @media screen and (min-width: 768px) {
    padding: 40px 71px;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 210px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  position: relative;
  border-radius: 100px;
  width: 120px;
  height: 120px;
  /* overflow: hidden; */
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
    margin-bottom: 16px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    height: 150px;
  }
`;

export const Category = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 30;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--accent-color);
  background-color: #fff4df;
  border-radius: 30px;
  padding: 8px 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #2b2b2a;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 4px;
    margin-bottom: 20px;
  }
`;

export const IconList = styled.ul`
  display: flex;
  gap: 4px;
`;

export const StarIcon = styled(FaStar)`
  width: 16px;
  height: 16px;
  fill: #ffc531;
`;

export const Rating = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: #2b2b2a;
`;

export const DescriptionList = styled.ul`
  display: flex;
  align-items: center;
  gap: 27px;
  margin-bottom: 18px;
`;

export const DescrItem = styled.li`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: rgba(38, 38, 38, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-bottom: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddToFavoriteBtn = styled.button`
  display: flex;
  gap: 8px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--light-color);
  background: var(--accent-color);
  border: none;
  border-radius: 30px;
  padding: 12px 31px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 43px;
  }
`;

export const FavoriteIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const ContactBtn = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--accent-color);
  background-color: #fff4df;
  border: none;
  border-radius: 30px;
  padding: 12px 37px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 50px;
  }
`;
