import { useEffect } from 'react';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  Image,
  Title,
  ButtonsWrapper,
  ApproveButton,
  CancelButton,
} from './ApproveActionModal.styled';

export const ApproveActionModal = ({ onClose }) => {
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

          <Image />
          <Title>Already leaving?</Title>

          <ButtonsWrapper>
            <ApproveButton>Yes</ApproveButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonsWrapper>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
