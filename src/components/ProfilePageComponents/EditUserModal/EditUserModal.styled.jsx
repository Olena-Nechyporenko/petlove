import styled from 'styled-components';
import { Form, Field } from 'formik';
import { FiUploadCloud } from 'react-icons/fi';
import { MdClear } from 'react-icons/md';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--modal-backdrop-color);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 200px;
  width: 335px;
  border-radius: 30px;
  background-color: var(--main-light-txt-color);

  @media screen and (min-width: 320px) and (max-width: 375px) {
    width: 95%;
  }

  @media screen and (min-width: 768px) {
    width: 480px;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;

  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-dark-txt-color);
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
  cursor: pointer;
`;

export const CloseIcon = styled(MdClear)`
  width: 24px;
  height: 24px;
  stroke: currentColor;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: var(--tertiary-dark-txt-color);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const ImgWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  overflow: hidden;
  margin: 0 auto 12px;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  object-position: center;

  @media screen and (min-width: 768px) {
    width: 86px;
    height: 86px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    gap: 22px;
    margin-bottom: 40px;
  }
`;

export const InputAndButtonWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 6px;
  }
`;

export const UploadPhotoButton = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: var(--main-dark-txt-color);
  background-color: var(--secondary-accent-color);
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 160px;
  height: 42px;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: var(--hover-secondary-accent-color);
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: var(--line-height);
    height: 42px;
  }
  input {
    &::-webkit-file-upload-button {
      background-color: transparent;
      border: none;
    }
  }
`;

export const UploadPhotoIcon = styled(FiUploadCloud)`
  width: 18px;
  height: 18px;
  stroke: var(--main-accent-color);
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
  border: 1px solid var(--main-accent-color);
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

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }

  &:focus {
    outline: ${props => (props.hasError ? '1px solid #ef2447' : '1px solid var(--main-accent-color)')};
  }
`;

export const SaveButton = styled.button`
  position: relative;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: var(--line-height);
  letter-spacing: -0.03em;
  color: var(--main-light-txt-color);
  border-radius: 30px;
  border: none;
  background-color: var(--main-accent-color);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 16px 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    border: ${props =>
      props.ishomepage === 'true' ? '2px solid var(--secondary-accent-color)' : '2px solid var(--hover-accent-color) '};
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
    transition: all var(--main-transition);
  }

  &:hover {
    background-color: transparent;
    color: ${props => (props.ishomepage === 'true' ? 'var(--main-light-txt-color)' : 'var(--hover-accent-color)')};
  }

  &:hover::after {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
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

export const ErrorURLWrapper = styled(ErrorWrapper)`
  position: absolute;
  top: -15px;
  left: 0;
`;
