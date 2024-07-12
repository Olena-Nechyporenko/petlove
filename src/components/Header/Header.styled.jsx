import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${props =>
    props.ishomepage === 'true'
      ? 'var(--light-color)'
      : 'var(--main-txt-color)'};
  display: flex;
  align-items: center;
  padding: 43px 0;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: ${props => (props.ishomepage === 'true' ? '280px' : '313px')};
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
  color: ${props =>
    props.ishomepage === 'true'
      ? 'var(--light-color)'
      : 'var(--main-txt-color)'};
  border: ${props =>
    props.ishomepage === 'true'
      ? '1px solid rgba(255, 255, 255, 0.4)'
      : '1px solid rgba(38, 38, 38, 0.15)'};
  border-radius: 30px;
  padding: 15px 20px;

  &.active {
    border: 1px solid #f6b83d;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const BurgerIcon = styled.svg`
  width: 32px;
  height: 32px;
  padding: 43px 0;
  fill: #fff;
`;
