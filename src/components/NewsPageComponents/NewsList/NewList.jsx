import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { getAllNews } from 'redux/news/operations';
import { selectAllNews, selectIsLoading, selectKeyword, selectTotalPages } from 'redux/news/selectors';
import { NewsListItem } from 'components/NewsPageComponents/NewsListItem/NewsListItem';
import { SkeletonNewsCard } from 'components/Loaders/Skeletons/SkeletonNewsCard';
import { NewsListContainer, List, PaginationContainer, NoNewsText } from './NewList.styled';

export const NewsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const news = useSelector(selectAllNews);
  const totalPages = useSelector(selectTotalPages);
  const keyword = useSelector(selectKeyword);
  const isLoading = useSelector(selectIsLoading);
  const isMobile = useMediaQuery('(max-width:767px)');

  useEffect(() => {
    dispatch(getAllNews({ keyword, currentPage }));
  }, [dispatch, keyword, currentPage]);

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NewsListContainer>
      {isLoading ? (
        <List>
          {Array.from(new Array(6)).map((_, index) => (
            <SkeletonNewsCard key={index} />
          ))}
        </List>
      ) : news?.length > 0 && !isLoading ? (
        <>
          <List>
            {news?.map(newInfo => (
              <NewsListItem key={newInfo._id} newInfo={newInfo} />
            ))}
          </List>
          {totalPages > 1 && !isLoading && (
            <PaginationContainer>
              <Pagination
                count={totalPages}
                page={currentPage}
                color="primary"
                variant="outlined"
                boundaryCount={isMobile ? 0 : 1}
                siblingCount={isMobile ? 1 : 1}
                showFirstButton={!isMobile}
                showLastButton={!isMobile}
                onChange={handleChangePage}
                renderItem={item => (
                  <PaginationItem
                    {...item}
                    sx={{
                      fontFamily: 'inherit',
                      fontWeight: '700',
                      fontSize: '12px',
                      lineHeight: 'var(--line-height)',
                      backgroundColor: 'var(--main-light-txt-color)',
                      color: 'var(--main-dark-txt-color)',
                      borderRadius: '100%',
                      width: '28px',
                      height: '28px',

                      '@media screen and (min-width: 768px)': {
                        fontSize: '18px',
                        lineHeight: '1.2',
                        width: '44px',
                        height: '44px',
                      },

                      '&.Mui-selected': {
                        fontFamily: 'inherit',
                        fontWeight: '700',
                        fontSize: '12px',
                        lineHeight: 'var(--line-height)',
                        backgroundColor: 'var(--main-accent-color)',
                        color: 'var(--main-light-txt-color)',
                        borderRadius: '100%',
                        width: '28px',
                        height: '28px',
                        '&:hover': {
                          backgroundColor: 'var(--main-accent-color)',
                          color: 'var(--main-light-txt-color)',
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
      ) : (
        <NoNewsText>Oops, we didn't find any news for your request.</NoNewsText>
      )}
    </NewsListContainer>
  );
};
