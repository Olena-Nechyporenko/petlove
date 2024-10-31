import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: ${props => (props.ishomepage === 'true' ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 32px 0;
    margin-left: auto;
    margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    margin-right: 0;
  }
`;

export const AuthLinkLogin = styled(NavLink)`
  position: relative;
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--main-light-txt-color);
  background-color: var(--main-accent-color);
  border: ${props => (props.ishomepage === 'true' ? '1px solid rgba(255, 255, 255, 0.4)' : 'none')};
  border-radius: 30px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 15px 35px;
  transition: all var(--main-transition);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: ${props =>
      props.ishomepage === 'true' ? '2px solid var(--secondary-accent-color)' : '2px solid var(--hover-accent-color) '};
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all var(--main-transition);
  }

  &:hover {
    background-color: transparent;
    color: ${props => (props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--hover-accent-color)')};
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const AuthLinkRegister = styled(NavLink)`
  position: relative;
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--main-accent-color);
  border-radius: 30px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  background-color: var(--secondary-accent-color);
  transition: all var(--main-transition);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: ${props =>
      props.ishomepage === 'true' ? '2px solid var(--secondary-accent-color)' : '2px solid var(--hover-accent-color) '};
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all var(--main-transition);
  }

  &:hover {
    background-color: transparent;
    color: ${props => (props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--hover-accent-color)')};
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;
