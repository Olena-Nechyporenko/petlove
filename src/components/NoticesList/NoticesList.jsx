import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { List } from './NoticesList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredNotices, selectFilters } from 'redux/notices/selectors';
import { useEffect } from 'react';
import { getAllNotices } from 'redux/notices/operations';

export const NoticesList = () => {
  const dispatch = useDispatch();
  // const allNotices = useSelector(selectAllNotices);
  const { keyword } = useSelector(selectFilters);
  const filteredNotices = useSelector(selectFilteredNotices);

  console.log(filteredNotices);

  useEffect(() => {
    dispatch(getAllNotices({ keyword }));
  }, [dispatch, keyword]);

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
