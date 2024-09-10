import { useEffect, useState } from 'react';
import {
  MyNoticesSection,
  ButtonsWrapper,
  FavoriteButton,
  ViewedButton,
  NoticesList,
  NoAnimalWrapp,
  NoAnimalsText,
  HighlightedWords,
} from './MyNotices.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { selectFullUserInfo } from 'redux/userProfile/selectors';
import { getFavorites, removeFavorites } from 'redux/favorites/operations';
// import { getFullUserInfo } from 'redux/userProfile/operations';
import { selectFavorites, selectViewed } from 'redux/favorites/selectors';
import { MyNoticesListItem } from 'components/MyNoticesListItem/MyNoticesListItem';

export const MyNotices = () => {
  const [isChecked, setIsChecked] = useState('favorite');
  const [localPetList, setLocalPetList] = useState([]);

  const favoritesPets = useSelector(selectFavorites);
  const viewedNotices = useSelector(selectViewed);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (favoritesPets && isChecked === 'favorite') {
      setLocalPetList(favoritesPets);
    }
    if (isChecked === 'viewed') {
      setLocalPetList(viewedNotices);
    }
  }, [isChecked, favoritesPets, viewedNotices]);

  const handleDelete = async noticeId => {
    setLocalPetList(prevList =>
      prevList.filter(notice => notice._id !== noticeId)
    );

    await dispatch(removeFavorites(noticeId));
  };

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

      {localPetList.length > 0 ? (
        <NoticesList>
          {localPetList.map(notice => (
            <MyNoticesListItem
              key={notice._id}
              petData={notice}
              onDelete={handleDelete}
            />
          ))}
        </NoticesList>
      ) : (
        <NoAnimalWrapp>
          {isChecked === 'favorite' ? (
            <NoAnimalsText>
              Oops,
              <HighlightedWords>
                looks like there aren't any furries
              </HighlightedWords>
              on our adorable page yet. Do not worry! View your pets on the
              "find your favorite pet" page and add them to your favorites.
            </NoAnimalsText>
          ) : (
            <NoAnimalsText>
              Oops,
              <HighlightedWords>
                looks like there aren't any furries
              </HighlightedWords>{' '}
              on our adorable page yet.
            </NoAnimalsText>
          )}
        </NoAnimalWrapp>
      )}
    </MyNoticesSection>
  );
};
