import styled from 'styled-components';

export const UserCardSection = styled.section`
  border-radius: 30px;
  background-color: var(--light-color);
  padding: 18px 20px 40px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 520px;
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
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--light-color);
  background: var(--accent-color);
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 10px 14px;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const EditProfileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff4df;
  border-radius: 30px;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }
`;

export const EditIcon = styled.svg`
  width: 18px;
  height: 18px;
`;

export const LogoutButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--accent-color);
  background-color: #fff4df;
  border: none;
  border-radius: 30px;
  padding: 12px 28px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 15px 35px;
  }
`;
