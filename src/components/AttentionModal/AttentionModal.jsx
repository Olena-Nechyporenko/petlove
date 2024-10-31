import { useEffect } from 'react';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseButton,
  CloseIcon,
  ImageWrapper,
  Title,
  Text,
  LinksWrapper,
  LoginLink,
  RegisterLink,
} from './AttentionModal.styled';
import dogImg from '../../images/login/dog-login-box.png';

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
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>

          <ImageWrapper>
            <img src={dogImg} alt="dog" width={44} height={44} />
          </ImageWrapper>

          <Title>Attention</Title>

          <Text>
            We would like to remind you that certain functionality is available only to authorized users.If you have an
            account, please log in with your credentials. If you do not already have an account, you must register to
            access these features.
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
