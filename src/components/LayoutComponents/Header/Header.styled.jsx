import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa6';

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 ${props => (props.ishomepage === 'true' ? '40px' : '20px')};

  @media screen and (min-width: 768px) {
    padding: 0 ${props => (props.ishomepage === 'true' ? '64px' : '32px')};
  }

  @media screen and (min-width: 1280px) {
    padding: 0 ${props => (props.ishomepage === 'true' ? '96px' : '64px')};
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${props => (props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--main-dark-txt-color)')};
  padding: 43px 0;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: ${props => (props.ishomepage === 'true' ? '280px' : '313px')};
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
`;

export const WhiteHeartIcon = styled(FaHeart)`
  width: 14px;
  height: 18px;
  fill: #fff;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const AccentHeartIcon = styled(FaHeart)`
  width: 14px;
  height: 18px;
  fill: #f6b83d;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 43px 0;
`;

export const Link = styled(NavLink)`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  color: ${props => (props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--main-dark-txt-color)')};
  border: ${props =>
    props.ishomepage === 'true' ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid var(--border-color)'};
  border-radius: 30px;
  box-shadow: inset 1px 1px 2px 0px rgba(255, 255, 255, 0.3), 4px 4px 12px 0px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 15px 20px;

  &.active {
    border: 1px solid var(--main-accent-color);
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--main-dark-txt-color)')};
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerIcon = styled(FiMenu)`
  width: 32px;
  height: 32px;
  padding: 43px 0;
  fill: currentColor;
`;
