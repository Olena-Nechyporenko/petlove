import styled from 'styled-components';
import Select from 'react-select';
import { Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { GiFemale } from 'react-icons/gi';
import { GiMale } from 'react-icons/gi';
import { IoMaleFemaleSharp } from 'react-icons/io5';

export const AddPetFormWrapper = styled.div`
  border-radius: 30px;
  background-color: var(--main-light-txt-color);
  padding: 28px 20px 20px;
  box-shadow: inset 1px 1px 2px 0px rgba(255, 255, 255, 0.3), 4px 4px 12px 0px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px 136px;
  }

  @media screen and (min-width: 1280px) {
    flex: 1;
    padding: 60px 80px;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const SubTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  color: var(--secondary-dark-txt-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 2px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 30px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const FemaleLabel = styled(StyledLabel)`
  background-color: rgba(244, 63, 94, 0.1);
`;

export const MaleLabel = styled(StyledLabel)`
  background-color: rgba(84, 173, 255, 0.1);
`;

export const UnknownLabel = styled(StyledLabel)`
  background-color: var(--secondary-accent-color);
`;

export const StyledField = styled(Field)`
  appearance: none;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  opacity: ${({ checked }) => (checked ? 1 : 0.2)};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const FemaleIcon = styled(GiFemale)`
  width: 24px;
  height: 24px;
  fill: #f43f5e;
`;

export const MaleIcon = styled(GiMale)`
  width: 24px;
  height: 24px;
  fill: #54adff;
`;

export const UnknownIcon = styled(IoMaleFemaleSharp)`
  width: 24px;
  height: 24px;
  fill: var(--main-accent-color);
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-accent-color);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  overflow: hidden;
  margin: 0 auto 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 31px;

  @media screen and (min-width: 768px) {
    gap: 22px;
    margin-bottom: 40px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
`;

export const Input = styled(({ hasError, ...props }) => <Field {...props} />)`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);
  border: 1px solid var(--border-color);
  border-radius: 30px;
  outline: ${props => (props.hasError ? '1px solid #ef2447' : 'none')};
  width: 100%;
  padding: 12px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 16px;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: var(--line-height);
    letter-spacing: -0.03em;
    color: var(--secondary-dark-txt-color);
    opacity: 1;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  &:focus {
    outline: ${props => (props.hasError ? '1px solid #ef2447' : '1px solid var(--main-accent-color)')};
  }
`;

export const BirthdayTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const BirthdayInput = styled(Input)`
  width: 144px;

  @media screen and (min-width: 768px) {
    width: 210px;
  }
`;

export const TypeLabel = styled.label`
  flex-grow: 1;
`;

export const DropDown = styled(Select)`
  border-radius: 30px;
`;

export const customDropDownStyles = {
  control: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'var(--main-light-txt-color)',
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '1.25',
    letterSpacing: '-0.03em',
    borderRadius: '30px',
    height: '42px',
    boxShadow: 'none',
    outline: 'none',
    border: state.isFocused ? '1px solid var(--main-accent-color)' : '1px solid var(--border-color)',

    '&:hover': {
      border: state.isHovered && '1px solid var(--main-accent-color)',
    },

    '@media (min-width: 768px)': {
      height: '52px',
      fontSize: '16px',
    },
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0px',
    paddingLeft: '12px',

    '@media (min-width: 768px)': {
      paddingLeft: '16px',
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
    color: state.isSelected ? 'var(--main-accent-color)' : 'var(--secondary-dark-txt-color)',
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
    color: 'var(--secondary-dark-txt-color)',

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.25',
    },
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '15px',
    border: '1px solid var(--border-color)',
    overflow: 'hidden',
  }),
  menuList: provided => ({
    ...provided,
    maxHeight: '100px',
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

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const SubmitButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);
  background-color: var(--main-accent-color);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 30px;
  padding: 12px 26px;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 58px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px solid var(--main-accent-color);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all var(--main-transition);
  }

  &:hover {
    background-color: transparent;
    color: var(--hover-accent-color);
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const BackLink = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-dark-txt-color);
  background-color: rgba(38, 38, 38, 0.05);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 12px 34px;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 14px 67px;
  }

  &:hover {
    background-color: rgba(38, 38, 38, 0.09);
  }
`;

export const ErrorWrapper = styled.span`
  position: absolute;
  bottom: -12px;
  left: 0;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #ef2447;

  @media screen and (min-width: 768px) {
    bottom: -14px;
    font-size: 12px;
    line-height: 1.17;
  }
`;
