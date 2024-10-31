import styled from 'styled-components';
import Select from 'react-select';
import { FiSearch } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';

export const FormWrapper = styled.div`
  border-radius: 30px;
  background-color: var(--secondary-accent-color);
  padding: 20px;
  box-shadow: inset 1px 1px 2px 0px rgba(255, 255, 255, 0.3), 4px 4px 12px 0px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px;
  }
`;

export const AboveLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

// Search

export const SearchLabel = styled.label`
  flex-grow: 1;
  position: relative;
`;

export const SearchField = styled.input`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: rgba(38, 38, 38, 0.8);
  border: none;
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
    color: var(--main-dark-txt-color);
    opacity: 1;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  &:focus {
    outline: 1px solid var(--main-accent-color);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-dark-txt-color);
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

export const ClearButton = styled(SearchButton)`
  right: 34px;

  @media screen and (min-width: 768px) {
    right: 36px;
  }
`;

export const ClearIcon = styled(MdClear)`
  width: 18px;
  height: 18px;
  stroke: currentColor;
`;

// Category  and  Gender

export const CategoryGenderWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }
`;

export const CategoryGenderLabel = styled.label`
  display: flex;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 170px;
  }

  @media screen and (min-width: 1280px) {
    width: 250px;
  }
`;

export const DropDown = styled(Select)`
  border-radius: 30px;
  flex-grow: 1;
`;

export const customDropDownStyles = {
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--main-light-txt-color)',
    fontSize: '14px',
    lineHeight: '1.25',
    letterSpacing: '-0.03em',
    borderRadius: '30px',
    height: '42px',
    boxShadow: 'none',
    outline: 'none',
    border: state.isFocused ? '1px solid var(--main-accent-color)' : '1px solid transparent',

    '&:hover': {
      border: state.isHovered && '1px solid var(--main-accent-color)',
    },

    '@media (min-width: 768px)': {
      height: '48px',
      fontSize: '16px',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0px',
    paddingLeft: '12px',

    '@media (min-width: 768px)': {
      paddingLeft: '14px',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 'var(--line-height)',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    backgroundColor: 'var(--main-light-txt-color)',
    color: state.isSelected ? 'var(--main-accent-color)' : 'rgba(38, 38, 38, 0.6)',
    cursor: 'pointer',

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.25',
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 'var(--line-height)',
    letterSpacing: '-0.03em',
    color: 'var(--main-dark-txt-color)',

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.25',
    },
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '15px',
    overflow: 'hidden',
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: '250px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(38, 38, 38, 0.08)',
      borderRadius: '13px',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: 'var(--main-dark-txt-color)',
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 'var(--line-height)',
    textTransform: 'capitalize',
    color: 'var(--main-dark-txt-color)',

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.25',
    },
  }),
};

export const TypeLabel = styled.label`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 190px;
  }

  @media screen and (min-width: 1280px) {
    width: 250px;
  }
`;

export const customDropDownStylesForType = {
  ...customDropDownStyles,
  control: (provided, state) => ({
    ...customDropDownStyles.control(provided, state),
    width: '100%',
  }),
};

// Line

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(38, 38, 38, 0.1);
  margin-bottom: 20px;
`;

export const UnderLineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
`;

// Sorting buttons

export const SortingButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid transparent;
  border-radius: 30px;
  background-color: ${props => (props.checked ? 'var(--main-accent-color)' : 'var(--main-light-txt-color)')};
  color: ${props => (props.checked ? 'var(--main-light-txt-color)' : 'var(--main-dark-txt-color)')};
  padding: 12px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--main-accent-color);
    color: var(--main-light-txt-color);
  }
  &:focus {
    border: 1px solid var(--main-accent-color);
    outline: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    gap: 8px;
    padding: 14px;
  }
`;

export const ResetFiltersButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  border: 1px solid transparent;
  border-radius: 30px;
  background-color: var(--main-accent-color);
  color: var(--main-light-txt-color);
  padding: 12px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--main-light-txt-color);
    color: var(--main-dark-txt-color);
  }
  &:focus {
    border: 1px solid #000000;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 20px;
    margin-left: auto;
  }
`;
