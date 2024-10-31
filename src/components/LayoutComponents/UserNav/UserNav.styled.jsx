import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoPerson } from 'react-icons/io5';

export const UserNavWrapper = styled.div`
  margin-left: auto;
  margin-right: 12px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    margin-right: 18px;
  }
`;

export const LogOutBtn = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    position: relative;
    display: ${props => (props.ishomepage === 'true' ? 'none' : 'block')};
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: var(--main-light-txt-color);
    background-color: var(--main-accent-color);
    border: none;
    border-radius: 30px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    padding: 15px 35px;
    cursor: pointer;
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
        props.ishomepage === 'true'
          ? '2px solid var(--secondary-accent-color)'
          : '2px solid var(--hover-accent-color) '};
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
  }
`;

export const UserBar = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

export const LinkToProfile = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  border-radius: 50%;
  box-shadow: inset 1px 1px 2px 0px rgba(255, 255, 255, 0.3), 4px 4px 12px 0px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0px rgba(0, 0, 0, 0.05);
  width: 40px;
  height: 40px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

export const ProfileIcon = styled(IoPerson)`
  width: 20px;
  height: 20px;
  fill: currentColor;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const UserName = styled.span`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: ${props => (props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--main-dark-txt-color)')};
  }
`;
