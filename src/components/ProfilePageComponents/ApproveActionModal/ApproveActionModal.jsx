import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseButton,
  CloseIcon,
  ImageWrapper,
  Title,
  ButtonsWrapper,
  ApproveButton,
  CancelButton,
} from './ApproveActionModal.styled';
import catImg from '../../../images/register/cat-register-box.png';

export const ApproveActionModal = ({ onClose }) => {
  const dispatch = useDispatch();

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
            <img src={catImg} alt="cat" width={44} height={44} />
          </ImageWrapper>
          <Title>Already leaving?</Title>

          <ButtonsWrapper>
            <ApproveButton type="button" onClick={() => dispatch(logOut())}>
              Yes
            </ApproveButton>
            <CancelButton type="button" onClick={() => onClose()}>
              Cancel
            </CancelButton>
          </ButtonsWrapper>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
