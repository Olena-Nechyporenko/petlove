import styled from 'styled-components';
import { IoPerson } from 'react-icons/io5';
import { RxPencil1 } from 'react-icons/rx';

export const UserCardSection = styled.section`
  border-radius: 30px;
  background-color: var(--main-light-txt-color);
  padding: 18px 20px 40px;
  box-shadow: inset 1px 1px 2px 0px rgba(255, 255, 255, 0.3), 4px 4px 12px 0px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 520px;
    height: 965px;
    box-sizing: border-box;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserSignWrapp = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.02em;
  color: var(--main-light-txt-color);
  background: var(--main-accent-color);
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 14px;
`;

export const UserIcon = styled(IoPerson)`
  width: 18px;
  height: 18px;
  fill: currentColor;
`;

export const EditProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  border-radius: 30px;
  border: none;
  width: 38px;
  height: 38px;
  padding: 0;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-secondary-accent-color);
  }
`;

export const EditIcon = styled(RxPencil1)`
  width: 22px;
  height: 22px;
  fill: currentColor;
`;

export const LogoutButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--main-accent-color);
  background-color: var(--secondary-accent-color);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  padding: 12px 28px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-secondary-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 15px 35px;
  }
`;
