import { Field } from 'formik';
import styled from 'styled-components';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';

export const AddPetFormWrapper = styled.div`
  border-radius: 30px;
  background-color: var(--light-color);
  padding: 28px 20px 20px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 40px 136px;
  }

  @media screen and (min-width: 768px) {
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
  color: var(--main-txt-color);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

export const SubTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(43, 43, 42, 0.4);

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
  background-color: #fff4df;
`;

export const StyledField = styled(Field)`
  appearance: none;
`;

export const StyledIcon = styled.svg`
  width: 20px;
  height: 20px;
  opacity: ${({ checked }) => (checked ? 1 : 0.2)};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ImgWrapper = styled.div`
  border-radius: 100px;
  overflow: hidden;
  width: 68px;
  height: 68px;
  margin: 0 auto 16px;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
    margin: -18px auto 12px;
  }
`;

export const Img = styled.img`
  width: 68px;
  height: 68px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 31px;

  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 40px;
  }
`;

export const InputAndButtonWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputUrl = styled(Field)`
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  width: 170px;
  box-sizing: border-box;
  padding: 9px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    width: 278px;
    padding: 12px;
  }

  &::placeholder {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: rgba(38, 38, 38, 0.5);
    opacity: 1;
  }
`;

export const ErrorWrapper = styled.span``;

export const UploadPhotoButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
  background-color: #fff4df;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 117px;
  height: 36px;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #fbe7c1;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    width: 146px;
    height: 42px;
  }
`;

export const Input = styled(Field)`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--main-txt-color);
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
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
    line-height: 1.29;
    letter-spacing: -0.03em;
    color: rgba(38, 38, 38, 0.5);
    opacity: 1;

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
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
    backgroundColor: '#fff',
    fontFamily: 'inherit',
    fontSize: '14px',
    lineHeight: '1.25',
    letterSpacing: '-0.03em',
    borderRadius: '30px',
    border: '1px solid rgba(38, 38, 38, 0.15)',
    height: '42px',
    boxShadow: 'none',
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
    backgroundColor: '#fff',
    color: state.isSelected ? '#f6b83d' : 'rgba(38, 38, 38, 0.6)',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.29',
    letterSpacing: '-0.03em',
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
    color: 'rgba(38, 38, 38, 0.5)',

    '@media (min-width: 768px)': {
      fontSize: '16px',
      lineHeight: '1.25',
    },
  }),
  menu: provided => ({
    ...provided,
    borderRadius: '15px',
    border: '1px solid rgba(38, 38, 38, 0.15)',
    height: '100px',
    overflow: 'auto',

    '@media (min-width: 768px)': {
      height: '140px',
    },
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
    color: '#262626',

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
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--light-color);
  background-color: var(--accent-color);
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

  &:hover {
    background-color: #f9b020;
  }
`;

export const BackLink = styled(NavLink)`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--main-txt-color);
  background-color: rgba(38, 38, 38, 0.05);
  border-radius: 30px;
  padding: 12px 34px;
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
