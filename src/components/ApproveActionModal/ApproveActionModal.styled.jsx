import styled from 'styled-components';
import img from '../../images/cat-info-box.png';

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
  align-items: center;
  padding: 40px 28px;

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

export const Image = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  width: 80px;
  height: 80px;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #262626;
  margin-bottom: 28px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ApproveButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--light-color);
  background-color: var(--accent-color);
  border: none;
  border-radius: 30px;
  padding: 12px 57px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: #f9b020;
  }
`;

export const CancelButton = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.03em;
  color: var(--main-txt-color);
  background-color: rgba(38, 38, 38, 0.05);
  border: none;
  border-radius: 30px;
  padding: 12px 44px;
  cursor: pointer;
  transition: all var(--main-transition);

  &:hover {
    background-color: rgba(38, 38, 38, 0.09);
  }
`;
