import styled from 'styled-components';
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
  z-index: 200px;
  width: 335px;
  border-radius: 30px;
  background-color: var(--main-light-txt-color);

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    width: 448px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 28px;

  @media screen and (min-width: 768px) {
    padding: 80px;
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

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-accent-color);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ApproveButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);
  background-color: var(--main-accent-color);
  border: none;
  border-radius: 30px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 12px 57px;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 57px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px solid var(--main-accent-color);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all var(--main-transition);
  }

  &:hover {
    background-color: transparent;
    color: var(--main-accent-color);
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const CancelButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);
  background-color: rgba(38, 38, 38, 0.05);
  border: none;
  border-radius: 30px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 12px 44px;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 44px;
  }

  &:hover {
    background-color: rgba(38, 38, 38, 0.09);
  }
`;
