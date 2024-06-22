import { useEffect } from 'react';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  ImgWrapper,
  Img,
  Title,
  Text,
  LinksWrapper,
  LoginLink,
  RegisterLink,
} from './AttentionModal.styled';
import img from '../../images/dog-info-box.png';

export const AttentionModal = ({ onClose }) => {
  useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseIcon
            onClick={onClose}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </CloseIcon>

          <ImgWrapper>
            <Img src={img} alt="" />
          </ImgWrapper>

          <Title>Attention</Title>

          <Text>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </Text>

          <LinksWrapper>
            <LoginLink to="/login">Log In</LoginLink>
            <RegisterLink to="/register">Registration</RegisterLink>
          </LinksWrapper>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
