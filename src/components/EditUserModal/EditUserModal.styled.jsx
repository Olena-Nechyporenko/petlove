import { Field } from 'formik';
import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(38, 38, 38, 0.3);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 200px;
  width: 335px;
  border-radius: 30px;
  background-color: var(--light-color);

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

export const CloseIcon = styled.svg`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 210px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  color: #2b2b2a;
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

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 21px;

  @media screen and (min-width: 768px) {
    gap: 14px;
    margin-bottom: 40px;
  }
`;

export const InputAndButtonWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 6px;
  }
`;

export const InputUrl = styled(Field)`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #262626;
  border: 1px solid #f6b83d;
  border-radius: 30px;
  width: 161px;
  box-sizing: border-box;
  padding: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    width: 226px;
  }
`;

export const ErrorWrapper = styled.span``;

export const UploadPhotoButton = styled.button`
  font-family: inherit;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #262626;
  background-color: #fff4df;
  border: none;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 126px;
  height: 42px;
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
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: #262626;
  border: 1px solid #f6b83d;
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

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.25;
    }
  }
`;

export const SaveButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--light-color);
  border-radius: 30px;
  border: none;
  background-color: var(--accent-color);
  width: 100%;
  padding: 12px 0;
  cursor: pointer;
  transition: all var(--main-transition);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
    padding: 16px 0;
  }

  &:hover {
    background-color: #f9b020;
  }
`;
