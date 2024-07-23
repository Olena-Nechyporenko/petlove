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
  FavoriteIcon,
} from './NoticesListItem.styled';
import { AnimalInfoModal } from 'components/AnimalInfoModal/AnimalInfoModal';
// import { AttentionModal } from 'components/AttentionModal/AttentionModal';

export const NoticesListItem = ({ noticeInfo }) => {
  const {
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

          <FavoriteButton type="button">
            <FavoriteIcon
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.6286 3.45753C15.2456 3.07428 14.7907 2.77026 14.2901 2.56284C13.7895 2.35542 13.253 2.24866 12.7111 2.24866C12.1693 2.24866 11.6327 2.35542 11.1321 2.56284C10.6315 2.77026 10.1767 3.07428 9.79362 3.45753L8.99862 4.25253L8.20362 3.45753C7.42985 2.68376 6.3804 2.24906 5.28612 2.24906C4.19185 2.24906 3.14239 2.68376 2.36862 3.45753C1.59486 4.2313 1.16016 5.28075 1.16016 6.37503C1.16016 7.4693 1.59486 8.51876 2.36862 9.29253L3.16362 10.0875L8.99862 15.9225L14.8336 10.0875L15.6286 9.29253C16.0119 8.90946 16.3159 8.45464 16.5233 7.95404C16.7307 7.45345 16.8375 6.91689 16.8375 6.37503C16.8375 5.83316 16.7307 5.2966 16.5233 4.79601C16.3159 4.29542 16.0119 3.84059 15.6286 3.45753Z"
                stroke="#F6B83D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </FavoriteIcon>
          </FavoriteButton>
        </ButtonsWrapper>
      </Item>
      {isModalOpen && (
        <AnimalInfoModal
          animalInfo={noticeInfo}
          birthday={formatedDate}
          onClose={handleToggleModal}
        />
      )}
    </>
  );
};
