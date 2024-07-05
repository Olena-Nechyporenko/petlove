import styled from 'styled-components';
import { Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';

export const FormWrapper = styled.div`
  background-color: var(--light-color);
  border-radius: 30px;
  padding: 27px 20px;

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 30px 140px;
  }

  @media screen and (min-width: 1280px) {
    padding: 77px 84px;
    width: 592px;
    height: 654px;
    box-sizing: border-box;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--main-txt-color);
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    margin-bottom: 16px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--main-txt-color);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.22;
    margin-bottom: 32px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-bottom: 32px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled(({ hasError, ...props }) => <Field {...props} />)`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: rgba(38, 38, 38, 0.8);
  border: 1px solid rgba(38, 38, 38, 0.15);
  border-radius: 30px;
  outline: ${props => (props.hasError ? '1px solid #ef2447' : 'none')};
  padding: 0 12px;
  width: 100%;
  height: 42px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 0 16px;
    height: 52px;
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

  &:focus {
    outline: ${props =>
      props.hasError ? '1px solid #ef2447' : '1px solid var(--accent-color)'};
  }
`;

export const PasswordHideBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  width: 18px;
  height: 18px;
  padding: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    right: 15px;
    width: 22px;
    height: 22px;
  }
`;

export const PasswordIcon = styled.svg`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const ErrorWrapper = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #ef2447;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.17;
  }
`;

export const StyledButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  background-color: var(--accent-color);
  color: var(--light-color);
  padding: 12px 0;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #f9b020;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 16px 0;
    margin-bottom: 16px;
  }
`;

export const LoginLinkWrapper = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: rgba(38, 38, 38, 0.5);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;

export const Link = styled(NavLink)`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: rgba(38, 38, 38, 0.5);
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--accent-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;
