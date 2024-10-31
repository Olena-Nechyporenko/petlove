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
  DeleteIcon,
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
          <Img src={imgURL} alt="Pet" />
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
            <DeleteIcon />
          </DeleteButton>
        </LearnMoreWrapper>
      </NoticesItem>
      {isModalOpen && <AnimalInfoModal animalInfo={petData} birthday={formatedDate} onClose={handleToggleModal} />}
    </>
  );
};
