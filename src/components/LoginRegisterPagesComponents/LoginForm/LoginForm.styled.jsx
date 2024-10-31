import styled from 'styled-components';
import { Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

export const FormWrapper = styled.div`
  background-color: var(--main-light-txt-color);
  border-radius: 30px;
  padding: 60px 20px;
  padding: 28px 20px 20px;
  box-shadow: inset 1px 1px 2px 0px rgba(255, 255, 255, 0.3), 4px 4px 12px 0px rgba(0, 0, 0, 0.05),
    2px 2px 4px 0px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 768px) {
    border-radius: 60px;
    padding: 70px 140px;
  }

  @media screen and (min-width: 1280px) {
    padding: 118px 84px;
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
  color: var(--main-dark-txt-color);
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 54px;
    margin-bottom: 16px;
  }
`;

export const SubTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.02em;
  color: var(--main-dark-txt-color);
  margin-bottom: 24px;

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
  gap: 18px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    gap: 22px;
    margin-bottom: 64px;
  }
`;

export const InputLabel = styled.label`
  position: relative;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled(({ hasError, ...props }) => <Field {...props} />)`
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: rgba(38, 38, 38, 0.8);
  border: 1px solid var(--border-color);
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
    line-height: var(--line-height);
    letter-spacing: -0.03em;
    color: var(--secondary-dark-txt-color);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  &:focus {
    outline: ${props => (props.hasError ? '1px solid #ef2447' : '1px solid var(--main-accent-color)')};
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
  color: var(--main-accent-color);
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

export const VisiblePasswordIcon = styled(AiOutlineEye)`
  width: 18px;
  height: 18px;
  fill: currentColor;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const InvisiblePasswordIcon = styled(AiOutlineEyeInvisible)`
  width: 18px;
  height: 18px;
  fill: currentColor;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
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

export const StyledButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  text-transform: uppercase;
  border: none;
  border-radius: 30px;
  background-color: var(--main-accent-color);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  opacity: ${({ disabled }) => (disabled ? '0.7' : '1')};
  color: var(--main-light-txt-color);
  height: 42px;
  margin-bottom: 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all var(--main-transition);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: 2px solid var(--hover-accent-color);
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all var(--main-transition);
  }

  &:not(:disabled):hover {
    background-color: transparent;
    color: var(--hover-accent-color);
  }

  &:not(:disabled):hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    height: 52px;
    margin-bottom: 16px;
  }
`;

export const RegisterLinkWrapper = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.03em;
  color: var(--secondary-dark-txt-color);
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
  color: var(--secondary-dark-txt-color);
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: var(--main-accent-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.43;
  }
`;
