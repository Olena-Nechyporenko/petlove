import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { MdClear } from 'react-icons/md';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 218px;
  height: 100vh;
  background-color: ${props =>
    props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--main-accent-color)'};
  display: flex;
  flex-direction: column;

  animation: ${slideIn} 0.3s forwards;

  @media screen and (min-width: 768px) {
    width: 374px;
  }
`;

export const Container = styled.div`
  padding: 40px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding: 40px 49px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.ishomepage === 'true' ? 'var(--main-dark-txt-color)' : 'var(--main-light-txt-color)')};
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const CloseIcon = styled(MdClear)`
  width: 32px;
  height: 32px;
  fill: currentColor;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const MobileNavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: ${props => (props.ishomepage === 'true' ? 'var(--main-dark-txt-color)' : 'var(--main-light-txt-color)')};
  border: 1px solid ${props => (props.ishomepage === 'true' ? 'var(--border-color)' : 'rgba(255, 255, 255, 0.15)')};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 120px;

  &.active {
    border: 1px solid
      ${props => (props.ishomepage === 'true' ? 'var(--main-accent-color)' : 'rgba(255, 255, 255, 0.5)')};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const AuthList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AuthItem = styled.li`
  width: 100%;
`;

export const AuthLinkLogin = styled(NavLink)`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--main-light-txt-color);
  background-color: ${props => (props.ishomepage === 'true' ? 'var(--main-accent-color)' : 'transparent')};
  border: 1px solid ${props => (props.ishomepage === 'true' ? 'transparent' : 'rgba(255, 255, 255, 0.5)')};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  transition: all var(--main-transition);

  &:active {
    color: var(--main-accent-color);
    background-color: var(--secondary-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 119px;
  }
`;

export const AuthLinkRegister = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--main-accent-color);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px 0;
  background-color: var(--secondary-accent-color);
  transition: all var(--main-transition);

  &:active {
    background-color: var(--hover-secondary-accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 119px;
  }
`;

export const LogOutBtn = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  border: none;
  border-radius: 30px;
  padding: 12px 60px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 15px 0;
    width: 170px;
    margin: 0 auto;
  }
`;
