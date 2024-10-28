import { useState } from 'react';
import { parseISO, format } from 'date-fns';
import { AnimalInfoModal } from 'components/AnimalInfoModal/AnimalInfoModal';
import {
  NoticesItem,
  ImgWrapper,
  TitleRatingWrapper,
  Title,
  Rating,
  RatingIcon,
  DescriptionList,
  DescrItem,
  DescrInfo,
  Img,
  Text,
  LearnMoreWrapper,
  LearnMoreButton,
  DeleteButton,
} from './MyNoticesListItem.styled';

export const MyNoticesListItem = ({ petData, onDelete }) => {
  const { _id, imgURL, title, popularity, name, birthday, sex, species, category, comment } = petData;
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
      <NoticesItem key={_id}>
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
            <DescrInfo>{birthday || 'unknown'}</DescrInfo>
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

        <LearnMoreWrapper>
          <LearnMoreButton type="button" onClick={handleToggleModal}>
            Learn more
          </LearnMoreButton>
          <DeleteButton type="button" onClick={() => onDelete(_id)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.25 4.5H3.75H15.75"
                stroke="#F6B83D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.25 4.5V15C14.25 15.3978 14.092 15.7794 13.8107 16.0607C13.5294 16.342 13.1478 16.5 12.75 16.5H5.25C4.85218 16.5 4.47064 16.342 4.18934 16.0607C3.90804 15.7794 3.75 15.3978 3.75 15V4.5M6 4.5V3C6 2.60218 6.15804 2.22064 6.43934 1.93934C6.72065 1.65804 7.10218 1.5 7.5 1.5H10.5C10.8978 1.5 11.2794 1.65804 11.5607 1.93934C11.842 2.22064 12 2.60218 12 3V4.5"
                stroke="#F6B83D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.5 8.25V12.75"
                stroke="#F6B83D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5 8.25V12.75"
                stroke="#F6B83D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </DeleteButton>
        </LearnMoreWrapper>
      </NoticesItem>
      {isModalOpen && <AnimalInfoModal animalInfo={petData} birthday={formatedDate} onClose={handleToggleModal} />}
    </>
  );
};
