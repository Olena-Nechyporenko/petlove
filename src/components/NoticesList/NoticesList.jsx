import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { List } from './NoticesList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredNotices, selectFilters } from 'redux/notices/selectors';
import { useEffect } from 'react';
import { getAllNotices } from 'redux/notices/operations';
import { getFavorites } from 'redux/favorites/operations';
import { selectFavorites } from 'redux/favorites/selectors';

export const NoticesList = () => {
  const dispatch = useDispatch();
  // const allNotices = useSelector(selectAllNotices);
  const { keyword } = useSelector(selectFilters);
  const filteredNotices = useSelector(selectFilteredNotices);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getAllNotices({ keyword }));
    dispatch(getFavorites());
  }, [dispatch, keyword, favorites]);

  return (
    <>
      <List>
        {filteredNotices?.map(notice => (
          <NoticesListItem key={notice._id} noticeInfo={notice} />
        ))}
      </List>
    </>
  );
};
