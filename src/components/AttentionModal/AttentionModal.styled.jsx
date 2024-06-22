import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--accent-color);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  text-align: center;
  color: #2b2b2a;
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
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--light-color);
  background-color: var(--accent-color);
  border-radius: 30px;
  padding: 12px 48px;
  transition: all var(--main-transition);

  &:hover {
    background-color: #f9b020;
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
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--accent-color);
  background-color: #fff4df;
  border-radius: 30px;
  padding: 12px 24px;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 24px;
  }
`;
