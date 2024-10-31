import styled from 'styled-components';
import { IoIosHeartEmpty } from 'react-icons/io';
import { IoMdHeart } from 'react-icons/io';
import { MdClear } from 'react-icons/md';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--modal-backdrop-color);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 200;
  width: 335px;
  border-radius: 30px;
  background-color: var(--main-light-txt-color);

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

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-dark-txt-color);
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  cursor: pointer;
`;

export const CloseIcon = styled(MdClear)`
  width: 24px;
  height: 24px;
  stroke: currentColor;
`;

export const ImgAndSpeciesWrapper = styled.div`
  position: relative;
`;

export const ImgWrapper = styled.div`
  border-radius: 100px;
  width: 120px;
  height: 120px;
  overflow: hidden;
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
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  border-radius: 30px;
  padding: 8px 14px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: var(--line-height);
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: var(--tertiary-dark-txt-color);
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
export const Rating = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: var(--tertiary-dark-txt-color);
`;

export const DescriptionList = styled.ul`
  display: flex;
  gap: 27px;
  margin-bottom: 18px;
`;

export const DescrItem = styled.li`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  color: var(--secondary-dark-txt-color);
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
  text-transform: capitalize;
  color: var(--main-dark-txt-color);
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--tertiary-dark-txt-color);
  margin-bottom: 40px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const FavoriteBtn = styled.button`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);
  background: var(--main-accent-color);
  border: none;
  border-radius: 30px;
  padding: 12px 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-accent-color);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 0;
  }
`;

export const EmptyHeartIcon = styled(IoIosHeartEmpty)`
  fill: currentColor;
  width: 18px;
  height: 18px;
`;

export const FillHeartIcon = styled(IoMdHeart)`
  fill: currentColor;
  width: 18px;
  height: 18px;
`;

export const ContactBtn = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  border: none;
  border-radius: 30px;
  padding: 12px 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-secondary-accent-color);
  }

  @media screen and (min-width: 768px) {
    padding: 14px 0;
  }
`;
