import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../images/icon.jpg';

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
    display: ${props => (props.ishomepage === 'true' ? 'none' : 'block')};
    font-family: inherit;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: -0.03em;
    text-transform: uppercase;
    color: var(--light-color);
    background-color: var(--accent-color);
    border: none;
    border-radius: 30px;
    padding: 15px 35px;
    cursor: pointer;
    transition: all var(--main-transition);
  }

  &:hover {
    background-color: #f9b020;
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
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
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
    color: ${props =>
      props.ishomepage === 'true'
        ? 'var(--light-color)'
        : 'var(--main-txt-color)'};
  }
`;
