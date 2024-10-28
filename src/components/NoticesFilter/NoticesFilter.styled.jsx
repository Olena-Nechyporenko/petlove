import styled from 'styled-components';
import Select from 'react-select';

export const FormWrapper = styled.div`
  border-radius: 30px;
  background-color: #fff4df;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px;
  }
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
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
  line-height: 1.29;
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
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: var(--main-txt-color);
    opacity: 1;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  &:focus {
    outline: 1px solid #f6b83d;
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
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 15px;
  }
`;

export const ClearButton = styled(SearchButton)`
  right: 34px;

  @media screen and (min-width: 768px) {
    right: 36px;
  }
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
    backgroundColor: '#fff',
    fontSize: '14px',
    lineHeight: '1.25',
    letterSpacing: '-0.03em',
    borderRadius: '30px',
    border: 'none',
    height: '42px',
    boxShadow: 'none',
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
    backgroundColor: '#fff',
    color: state.isSelected ? '#f6b83d' : 'rgba(38, 38, 38, 0.6)',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.29',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
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
    lineHeight: '1.29',
    letterSpacing: '-0.03em',
    color: '#262626',

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
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#262626',
  }),
  singleValue: provided => ({
    ...provided,
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.29',
    textTransform: 'capitalize',
    color: '#262626',

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
  line-height: 1.29;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: ${props => (props.checked ? '#f6b83d' : '#fff')};
  color: ${props => (props.checked ? '#fff' : '#262626')};
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--accent-color);
    color: var(--light-color);
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
  line-height: 1.29;
  letter-spacing: -0.03em;
  padding: 12px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background-color: #f6b83d;
  color: #fff;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fff;
    color: #262626;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 20px;
    margin-left: auto;
  }
`;
