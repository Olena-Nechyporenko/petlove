import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import img from '../../images/icon.jpg';

export const UserNavWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 8px;
    margin-left: auto;
    margin-right: 16px;
  }
`;

export const LogOutBtn = styled.button`
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const LinkToProfile = styled(NavLink)`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserName = styled.span`
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    letter-spacing: -0.03em;
    color: var(--main-txt-color);
  }
`;
