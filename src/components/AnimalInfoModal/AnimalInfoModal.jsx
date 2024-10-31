import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from 'react-rating-stars-component';
import { selectFavorites } from 'redux/favorites/selectors';
import { addFavorites, getFavorites, removeFavorites } from 'redux/favorites/operations';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseButton,
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

export const AnimalInfoModal = ({ animalInfo, birthday, onClose }) => {
  const { _id, imgURL, title, popularity, name, sex, species, category, comment } = animalInfo;
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const isInFavorites = favorites.some(favPet => favPet._id === _id);

  const normalizedRating = rating => {
    const minRating = 3;
    const maxRating = 273;
    const normalizedRating = ((rating - minRating) / (maxRating - minRating)) * 5;
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

  const handleRemoveFavorites = async id => {
    await dispatch(removeFavorites(id));
    Notiflix.Notify.success(`${name} successfully removed from favorite pets!`);
    dispatch(getFavorites());
  };

  const handleAddFavorites = async id => {
    await dispatch(addFavorites(id));
    Notiflix.Notify.success(`${name} successfully added to favorite pets!`);
    dispatch(getFavorites());
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <ImgAndSpeciesWrapper>
            <ImgWrapper>
              <Img src={imgURL} alt="Pet" />
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
              <FavoriteBtn type="button" onClick={() => handleRemoveFavorites(_id)}>
                Remove from
                <FillHeartIcon />
              </FavoriteBtn>
            ) : (
              <FavoriteBtn type="button" onClick={() => handleAddFavorites(_id)}>
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
