import { useEffect } from 'react';
import ReactStars from 'react-rating-stars-component';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  ImgAndSpeciesWrapper,
  ImgWrapper,
  Img,
  Category,
  Title,
  RatingWrapper,
  Rating,
  DescriptionList,
  DescrItem,
  DescrInfo,
  Text,
  ButtonsWrapper,
  FavoriteBtn,
  EmptyHeartIcon,
  FillHeartIcon,
  ContactBtn,
} from './AnimalInfoModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/favorites/selectors';
import { addFavorites, removeFavorites } from 'redux/favorites/operations';

export const AnimalInfoModal = ({ animalInfo, birthday, onClose }) => {
  const {
    _id,
    imgURL,
    title,
    popularity,
    name,
    sex,
    species,
    category,
    comment,
  } = animalInfo;
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();

  const isInFavorites = favorites.some(favPet => favPet._id === _id);

  const normalizedRating = rating => {
    const minRating = 3;
    const maxRating = 273;
    const normalizedRating =
      ((rating - minRating) / (maxRating - minRating)) * 5;
    return normalizedRating;
  };

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

          <ImgAndSpeciesWrapper>
            <ImgWrapper>
              <Img src={imgURL} alt="" />
            </ImgWrapper>
            <Category>{category}</Category>
          </ImgAndSpeciesWrapper>

          <Title>{title}</Title>
          <RatingWrapper>
            <ReactStars
              count={5}
              value={normalizedRating(popularity)}
              size={20}
              isHalf={true}
              activeColor="#ffc531"
              color="rgba(38, 38, 38, 0.05)"
            />
            <Rating>{popularity}</Rating>
          </RatingWrapper>

          <DescriptionList>
            <DescrItem>
              Name
              <DescrInfo>{name}</DescrInfo>
            </DescrItem>

            <DescrItem>
              Birthday
              <DescrInfo>{birthday() || 'Unknown'}</DescrInfo>
            </DescrItem>

            <DescrItem>
              Sex
              <DescrInfo>{sex}</DescrInfo>
            </DescrItem>

            <DescrItem>
              Species
              <DescrInfo>{species}</DescrInfo>
            </DescrItem>
          </DescriptionList>

          <Text>{comment}</Text>

          <ButtonsWrapper>
            {isInFavorites ? (
              <FavoriteBtn
                type="button"
                onClick={() => dispatch(removeFavorites(_id))}
              >
                Remove from
                <FillHeartIcon />
              </FavoriteBtn>
            ) : (
              <FavoriteBtn
                type="button"
                onClick={() => dispatch(addFavorites(_id))}
              >
                Add to
                <EmptyHeartIcon />
              </FavoriteBtn>
            )}

            <ContactBtn href="tel:+380971111111">Contact</ContactBtn>
          </ButtonsWrapper>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
