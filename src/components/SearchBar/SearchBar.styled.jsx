import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 52px 0 44px;
  }

  @media screen and (min-width: 1280px) {
    padding: 64px 0 60px;
  }
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--main-txt-color);

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

export const SearchInput = styled.input`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: rgba(38, 38, 38, 0.8);
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  width: 100%;
  padding: 12px 35px 12px 12px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 35px 14px 14px;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: rgba(38, 38, 38, 0.5);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }
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
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 15px;
  }
`;

export const SearchIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
