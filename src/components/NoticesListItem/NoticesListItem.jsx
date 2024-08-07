import { useState } from 'react';
import { parseISO, format } from 'date-fns';
import {
  Item,
  ImgWrapper,
  Img,
  TitleRatingWrapper,
  Title,
  Rating,
  RatingIcon,
  DescriptionList,
  DescrItem,
  DescrInfo,
  Text,
  ButtonsWrapper,
  LearnMoreButton,
  FavoriteButton,
  EmptyHeartIcon,
  FillHeartIcon,
} from './NoticesListItem.styled';
import { AnimalInfoModal } from 'components/AnimalInfoModal/AnimalInfoModal';
import { useAuth } from 'hooks/useAuth';
import { AttentionModal } from 'components/AttentionModal/AttentionModal';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorites, removeFavorites } from 'redux/favorites/operations';
import { selectFavorites } from 'redux/favorites/selectors';

export const NoticesListItem = ({ noticeInfo }) => {
  const {
    _id,
    imgURL,
    title,
    popularity,
    name,
    birthday,
    sex,
    species,
    category,
    comment,
  } = noticeInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isInFavorites = favorites.some(favPet => favPet._id === _id);

  const handleAddFavorites = id => {
    if (!isInFavorites) {
      dispatch(addFavorites(id));
    } else {
      dispatch(removeFavorites(id));
    }
  };

  const formatedDate = () => {
    if (birthday) {
      const date = parseISO(birthday);
      return format(date, 'dd.MM.yyyy');
    }
  };

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Item>
        <ImgWrapper>
          <Img src={imgURL} alt="" />
        </ImgWrapper>
        <TitleRatingWrapper>
          <Title>{title}</Title>
          <Rating>
            <RatingIcon />
            {popularity}
          </Rating>
        </TitleRatingWrapper>
        <DescriptionList>
          <DescrItem>
            Name
            <DescrInfo>{name}</DescrInfo>
          </DescrItem>

          <DescrItem>
            Birthday
            <DescrInfo>{formatedDate() || 'Unknown'}</DescrInfo>
          </DescrItem>

          <DescrItem>
            Sex
            <DescrInfo>{sex}</DescrInfo>
          </DescrItem>

          <DescrItem>
            Species
            <DescrInfo>{species}</DescrInfo>
          </DescrItem>

          <DescrItem>
            Category
            <DescrInfo>{category}</DescrInfo>
          </DescrItem>
        </DescriptionList>

        <Text>{comment}</Text>

        <ButtonsWrapper>
          <LearnMoreButton type="button" onClick={handleToggleModal}>
            Learn more
          </LearnMoreButton>

          <FavoriteButton type="button" onClick={() => handleAddFavorites(_id)}>
            {isInFavorites ? <FillHeartIcon /> : <EmptyHeartIcon />}
          </FavoriteButton>
        </ButtonsWrapper>
      </Item>
      {isModalOpen &&
        (isLoggedIn ? (
          <AnimalInfoModal
            animalInfo={noticeInfo}
            birthday={formatedDate}
            onClose={handleToggleModal}
          />
        ) : (
          <AttentionModal onClose={handleToggleModal} />
        ))}
    </>
  );
};
