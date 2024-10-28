import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices } from 'redux/notices/operations';
import { getFavorites } from 'redux/favorites/operations';
import { selectFilteredNotices, selectFilters } from 'redux/notices/selectors';
import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { List } from './NoticesList.styled';

export const NoticesList = () => {
  const dispatch = useDispatch();
  const { keyword } = useSelector(selectFilters);
  const filteredNotices = useSelector(selectFilteredNotices);

  useEffect(() => {
    dispatch(getAllNotices({ keyword }));
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

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
