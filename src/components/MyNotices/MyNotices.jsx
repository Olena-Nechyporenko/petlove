import { useState } from 'react';
import {
  MyNoticesSection,
  ButtonsWrapper,
  FavoriteButton,
  ViewedButton,
  NoticesList,
  NoticesItem,
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
  LearnMoreWrapper,
  LearnMoreButton,
  DeleteButton,
  NoAnimalWrapp,
  NoAnimalsText,
  HighlightedWords,
} from './MyNotices.styled';
import img from '../../images/register-mob.jpg';

const notices = [
  {
    id: 1,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 2,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 3,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 4,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 5,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
];

export const MyNotices = () => {
  const [isChecked, setIsChecked] = useState('favorite');

  const handleCheckedButton = e => {
    setIsChecked(e.target.name);
  };

  return (
    <MyNoticesSection>
      <ButtonsWrapper>
        <FavoriteButton
          type="button"
          name={'favorite'}
          value={'favorite' === isChecked}
          onClick={handleCheckedButton}
        >
          My favorite pets
        </FavoriteButton>
        <ViewedButton
          type="button"
          name={'viewed'}
          value={'viewed' === isChecked}
          onClick={handleCheckedButton}
        >
          Viewed
        </ViewedButton>
      </ButtonsWrapper>

      {notices.length > 0 ? (
        <NoticesList>
          {notices.map(notice => (
            <NoticesItem key={notice.id}>
              <ImgWrapper>
                <Img src={notice.img} alt="" />
              </ImgWrapper>
              <TitleRatingWrapper>
                <Title>{notice.title}</Title>
                <Rating>
                  <RatingIcon />
                  {notice.rating}
                </Rating>
              </TitleRatingWrapper>
              <DescriptionList>
                <DescrItem>
                  Name
                  <DescrInfo>{notice.name}</DescrInfo>
                </DescrItem>

                <DescrItem>
                  Birthday
                  <DescrInfo>{notice.birthday}</DescrInfo>
                </DescrItem>

                <DescrItem>
                  Sex
                  <DescrInfo>{notice.sex}</DescrInfo>
                </DescrItem>

                <DescrItem>
                  Species
                  <DescrInfo>{notice.species}</DescrInfo>
                </DescrItem>

                <DescrItem>
                  Category
                  <DescrInfo>{notice.category}</DescrInfo>
                </DescrItem>
              </DescriptionList>

              <Text>{notice.descr}</Text>

              <LearnMoreWrapper>
                <LearnMoreButton type="button">Learn more</LearnMoreButton>
                <DeleteButton>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
          ))}
        </NoticesList>
      ) : (
        <NoAnimalWrapp>
          <NoAnimalsText>
            Oops,{' '}
            <HighlightedWords>
              looks like there aren't any furries
            </HighlightedWords>{' '}
            on our adorable page yet. Do not worry! View your pets on the "find
            your favorite pet" page and add them to your favorites.
          </NoAnimalsText>
        </NoAnimalWrapp>
      )}
    </MyNoticesSection>
  );
};
