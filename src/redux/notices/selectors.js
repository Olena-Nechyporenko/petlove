import { createSelector } from '@reduxjs/toolkit';

export const selectAllNotices = state => state.notices.notices;
export const selectAllCategories = state => state.notices.categories;
export const selectAllSex = state => state.notices.sex;
export const selectAllSpecies = state => state.notices.species;
export const selectFilters = state => state.notices.filters;
export const selectTotalPages = state => state.notices.totalPages;

export const selectFilteredNotices = createSelector(
  [selectFilters, selectAllNotices],
  (filters, notices) => {
    return notices
      .filter(notice => {
        if (filters.category && filters.category !== notice.category) {
          return false;
        }
        if (filters.gender && filters.gender !== notice.sex) {
          return false;
        }
        if (filters.type && filters.type !== notice.species) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.popularity === 'unpopular') {
          return a.popularity - b.popularity;
        } else if (filters.popularity === 'popular') {
          return b.popularity - a.popularity;
        } else {
          return 0;
        }
      });
  }
);
