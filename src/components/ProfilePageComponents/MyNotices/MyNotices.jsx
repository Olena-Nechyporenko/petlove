import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, removeFavorites } from 'redux/favorites/operations';
import { selectFavorites, selectisLoading, selectViewed } from 'redux/favorites/selectors';
import { MyNoticesListItem } from 'components/ProfilePageComponents/MyNoticesListItem/MyNoticesListItem';
import { removeViewedNotices } from 'redux/favorites/favoritesSlice';
import { LoaderSimple } from 'components/Loaders/LoaderSimple/LoaderSimple';
import {
  MyNoticesSection,
  ButtonsWrapper,
  FavoriteButton,
  ViewedButton,
  NoticesListContainer,
  NoticesList,
  NoAnimalWrapp,
  NoAnimalsText,
  HighlightedWords,
} from './MyNotices.styled';

export const MyNotices = () => {
  const [isChecked, setIsChecked] = useState('favorite');
  const [localPetList, setLocalPetList] = useState([]);

  const dispatch = useDispatch();
  const favoritesPets = useSelector(selectFavorites);
  const viewedNotices = useSelector(selectViewed);
  const isLoading = useSelector(selectisLoading);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  useEffect(() => {
    if (favoritesPets && isChecked === 'favorite') {
      return setLocalPetList(favoritesPets);
    }
    if (isChecked === 'viewed') {
      return setLocalPetList(viewedNotices);
    }
  }, [isChecked, favoritesPets, viewedNotices]);

  const handleDelete = async noticeId => {
    if (isChecked === 'favorite') {
      Notiflix.Confirm.show(
        'Removing from favorites',
        `Are you sure you want to remove this pet from favorites?`,
        'Yes',
        'No',
        async function okCb() {
          setLocalPetList(prevList => prevList.filter(notice => notice._id !== noticeId));
          await dispatch(removeFavorites(noticeId));
        },
        function cancelCb() {},
        {
          width: '320px',
          borderRadius: '8px',
        }
      );
    } else {
      setLocalPetList(prevList => prevList.filter(notice => notice._id !== noticeId));
      await dispatch(removeViewedNotices(noticeId));
    }
  };

  const handleCheckedButton = async e => {
    setIsChecked(e.target.name);
    await dispatch(getFavorites());
  };

  return (
    <MyNoticesSection>
      <ButtonsWrapper>
        <FavoriteButton type="button" name={'favorite'} value={'favorite' === isChecked} onClick={handleCheckedButton}>
          My favorite pets
        </FavoriteButton>
        <ViewedButton type="button" name={'viewed'} value={'viewed' === isChecked} onClick={handleCheckedButton}>
          Viewed
        </ViewedButton>
      </ButtonsWrapper>

      <NoticesListContainer>
        {isLoading ? (
          <LoaderSimple />
        ) : localPetList?.length > 0 ? (
          <NoticesList>
            {localPetList?.map(notice => (
              <MyNoticesListItem key={notice._id} petData={notice} onDelete={handleDelete} />
            ))}
          </NoticesList>
        ) : (
          <NoAnimalWrapp>
            {isChecked === 'favorite' ? (
              <NoAnimalsText>
                Oops,
                <HighlightedWords>looks like there aren't any furries</HighlightedWords>
                on our adorable page yet. Do not worry! View your pets on the "find your favorite pet" page and add them
                to your favorites.
              </NoAnimalsText>
            ) : (
              <NoAnimalsText>
                Oops,
                <HighlightedWords>looks like there aren't any furries</HighlightedWords> on our adorable page yet.
              </NoAnimalsText>
            )}
          </NoAnimalWrapp>
        )}
      </NoticesListContainer>
    </MyNoticesSection>
  );
};
