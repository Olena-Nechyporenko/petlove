import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import { useAuth } from 'hooks/useAuth';
import { selectFavorites } from 'redux/favorites/selectors';
import { setViewedNotices } from 'redux/favorites/favoritesSlice';
import { addFavorites, getFavorites, removeFavorites } from 'redux/favorites/operations';
import { AnimalInfoModal } from 'components/AnimalInfoModal/AnimalInfoModal';
import { AttentionModal } from 'components/AttentionModal/AttentionModal';
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

export const NoticesListItem = ({ noticeInfo }) => {
  const { _id, imgURL, title, popularity, name, birthday, sex, species, category, comment } = noticeInfo;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isInFavorites = favorites.some(favPet => favPet._id === _id);

  const handleAddFavorites = async id => {
    if (!isInFavorites) {
      await dispatch(addFavorites(id));
      dispatch(getFavorites());
    } else {
      await dispatch(removeFavorites(id));
      dispatch(getFavorites());
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

    if (isModalOpen) {
      dispatch(setViewedNotices(noticeInfo));
    }
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
          <AnimalInfoModal animalInfo={noticeInfo} birthday={formatedDate} onClose={handleToggleModal} />
        ) : (
          <AttentionModal onClose={handleToggleModal} />
        ))}
    </>
  );
};
