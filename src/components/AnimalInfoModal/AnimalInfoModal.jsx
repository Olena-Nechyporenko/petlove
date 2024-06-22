import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  ImgWrapper,
  Img,
  Category,
  Title,
  RatingWrapper,
  IconList,
  StarIcon,
  Rating,
  DescriptionList,
  DescrItem,
  DescrInfo,
  Text,
  ButtonsWrapper,
  AddToFavoriteBtn,
  FavoriteIcon,
  ContactBtn,
} from './AnimalInfoModal.styled';
import img from '../../images/cat-info-box.png';
import { useEffect } from 'react';

export const AnimalInfoModal = ({ onClose }) => {
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
            <Category>Sell</Category>
          </ImgWrapper>

          <Title>Golden Retriever Puppies</Title>
          <RatingWrapper>
            <IconList>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
              <li>
                <StarIcon />
              </li>
            </IconList>
            <Rating>1</Rating>
          </RatingWrapper>

          <DescriptionList>
            <DescrItem>
              Name
              <DescrInfo>Daisy</DescrInfo>
            </DescrItem>

            <DescrItem>
              Birthday
              <DescrInfo>12.08.2024</DescrInfo>
            </DescrItem>

            <DescrItem>
              Sex
              <DescrInfo>Female</DescrInfo>
            </DescrItem>

            <DescrItem>
              Species
              <DescrInfo>Dog</DescrInfo>
            </DescrItem>
          </DescriptionList>

          <Text>Adorable puppy looking for a loving home.</Text>

          <ButtonsWrapper>
            <AddToFavoriteBtn type="button">
              Add to
              <FavoriteIcon
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.6286 3.45753C15.2456 3.07428 14.7907 2.77026 14.2901 2.56284C13.7895 2.35542 13.253 2.24866 12.7111 2.24866C12.1693 2.24866 11.6327 2.35542 11.1321 2.56284C10.6315 2.77026 10.1767 3.07428 9.79362 3.45753L8.99862 4.25253L8.20362 3.45753C7.42985 2.68376 6.3804 2.24906 5.28612 2.24906C4.19185 2.24906 3.14239 2.68376 2.36862 3.45753C1.59486 4.2313 1.16016 5.28075 1.16016 6.37503C1.16016 7.4693 1.59486 8.51876 2.36862 9.29253L3.16362 10.0875L8.99862 15.9225L14.8336 10.0875L15.6286 9.29253C16.0119 8.90946 16.3159 8.45464 16.5233 7.95404C16.7307 7.45345 16.8375 6.91689 16.8375 6.37503C16.8375 5.83316 16.7307 5.2966 16.5233 4.79601C16.3159 4.29542 16.0119 3.84059 15.6286 3.45753Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </FavoriteIcon>
            </AddToFavoriteBtn>

            <ContactBtn type="button">Contact</ContactBtn>
          </ButtonsWrapper>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
