import { NewsListItem } from 'components/NewsListItem/NewsListItem';
import { List, PaginationContainer } from './NewList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllNews } from 'redux/news/operations';
import {
  selectAllNews,
  selectKeyword,
  selectTotalPages,
} from 'redux/news/selectors';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

export const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const totalPages = useSelector(selectTotalPages);
  const keyword = useSelector(selectKeyword);

  useEffect(() => {
    dispatch(getAllNews({ keyword, currentPage }));
  }, [dispatch, keyword, currentPage]);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <List>
        {news?.map(newInfo => (
          <NewsListItem key={newInfo._id} newInfo={newInfo} />
        ))}
      </List>

      {totalPages > 1 && (
        <PaginationContainer>
          <Pagination
            count={totalPages}
            color="primary"
            variant="outlined"
            boundaryCount={0}
            siblingCount={1}
            showFirstButton
            showLastButton
            onChange={handleChangePage}
            renderItem={item => (
              <PaginationItem
                {...item}
                sx={{
                  fontFamily: 'inherit',
                  fontWeight: '700',
                  fontSize: '14px',
                  lineHeight: '1.29',
                  backgroundColor: '#fff',
                  color: '#262626',
                  borderRadius: '100%',
                  width: '40px',
                  height: '40px',
                  '&:hover': {
                    backgroundColor: '#f6b83d',
                    color: '#fff',
                  },

                  '@media screen and (min-width: 768px)': {
                    fontSize: '18px',
                    lineHeight: '1.2',
                    width: '44px',
                    height: '44px',
                  },

                  '&.Mui-selected': {
                    fontFamily: 'inherit',
                    fontWeight: '700',
                    fontSize: '14px',
                    lineHeight: '1.29',
                    backgroundColor: '#f6b83d',
                    color: '#fff',
                    borderRadius: '100%',
                    width: '40px',
                    height: '40px',
                    '&:hover': {
                      backgroundColor: '#f6b83d',
                      color: '#fff',
                    },

                    '@media screen and (min-width: 768px)': {
                      fontSize: '18px',
                      lineHeight: '1.2',
                      width: '44px',
                      height: '44px',
                    },
                  },
                }}
              />
            )}
          />
        </PaginationContainer>
      )}
    </>
  );
};
