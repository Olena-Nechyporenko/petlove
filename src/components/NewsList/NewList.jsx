import { NewsListItem } from 'components/NewsListItem/NewsListItem';
import { List } from './NewList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllNews } from 'redux/news/operations';
import { selectAllNews, selectKeyword } from 'redux/news/selectors';

export const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const keyword = useSelector(selectKeyword);

  useEffect(() => {
    dispatch(getAllNews(keyword));
  }, [dispatch, keyword]);

  return (
    <List>
      {news?.map(newInfo => (
        <NewsListItem key={newInfo._id} newInfo={newInfo} />
      ))}
    </List>
  );
};
