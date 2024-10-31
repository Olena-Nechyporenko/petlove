import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 54px 0 40px;
  }

  @media screen and (min-width: 1280px) {
    padding: 64px 32px 60px;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);

  @media screen and (min-width: 768px) {
    font-size: 54px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 230px;
  }
`;

export const SearchField = styled.input`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: rgba(38, 38, 38, 0.8);
  border: 1px solid var(--border-color);
  border-radius: 30px;
  width: 100%;
  padding: 12px 55px 12px 12px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 55px 14px 14px;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: var(--line-height);
    letter-spacing: -0.03em;
    color: var(--secondary-dark-txt-color);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  &:focus {
    outline: 1px solid var(--main-accent-color);
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 34px;
  transform: translateY(-50%);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary-dark-txt-color);
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 36px;
  }
`;

export const ClearIcon = styled(MdClear)`
  width: 18px;
  height: 18px;
  stroke: currentColor;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--secondary-dark-txt-color);
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 15px;
  }
`;

export const SearchIcon = styled(FiSearch)`
  width: 18px;
  height: 18px;
  stroke: currentColor;
`;
