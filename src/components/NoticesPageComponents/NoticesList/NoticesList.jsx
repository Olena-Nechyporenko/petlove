import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices } from 'redux/notices/operations';
import { getFavorites } from 'redux/favorites/operations';
import { selectFilteredNotices, selectFilters, selectIsLoading } from 'redux/notices/selectors';
import { NoticesListItem } from 'components/NoticesPageComponents/NoticesListItem/NoticesListItem';
import { SkeletonNoticeCard } from 'components/Loaders/Skeletons/SkeletonNoticeCard';
import { NoticesListContainer, List, NoNoticesText } from './NoticesList.styled';

export const NoticesList = () => {
  const dispatch = useDispatch();
  const { keyword } = useSelector(selectFilters);
  const filteredNotices = useSelector(selectFilteredNotices);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getAllNotices({ keyword }));
  }, [dispatch, keyword]);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <NoticesListContainer>
      {isLoading ? (
        <List>
          {Array.from(new Array(9)).map((_, index) => (
            <SkeletonNoticeCard key={index} />
          ))}
        </List>
      ) : (
        <>
          {filteredNotices?.length > 0 && !isLoading ? (
            <List>
              {filteredNotices?.map(notice => (
                <NoticesListItem key={notice._id} noticeInfo={notice} />
              ))}
            </List>
          ) : (
            <NoNoticesText>Oops, we didn't find any notices according to your filters.</NoNoticesText>
          )}
        </>
      )}
    </NoticesListContainer>
  );
};
