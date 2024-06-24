import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthList = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 32px 0;
    margin-left: auto;
    margin-right: 16px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const AuthLinkLogin = styled(NavLink)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--light-color);
  background-color: var(--accent-color);
  border-radius: 30px;
  padding: 15px 35px;
  transition: all var(--main-transition);

  &:hover {
    background-color: #f9b020;
  }
`;

export const AuthLinkRegister = styled(NavLink)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--accent-color);
  border-radius: 30px;
  padding: 15px 20px;
  background-color: #fff4df;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }
`;
