import { NavLink } from 'react-router-dom';
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
    width: 466px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 60px;
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
  color: var(--main-accent-color);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.02em;
  text-align: center;
  color: var(--tertiary-dark-txt-color);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const LoginLink = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);
  background-color: var(--main-accent-color);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 12px 48px;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 48px;
  }
`;

export const RegisterLink = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 12px 24px;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-secondary-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 24px;
  }
`;
