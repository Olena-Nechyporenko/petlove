import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setKeyword } from 'redux/news/newsSlice';
import {
  SearchBarWrapper,
  Title,
  InputWrapper,
  ClearButton,
  ClearIcon,
  SearchField,
  SearchButton,
  SearchIcon,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const dispatch = useDispatch();

  const handleClearSearch = () => {
    setSearchText('');
    dispatch(setKeyword(''));
  };

  const handleSubmit = () => {
    dispatch(setKeyword(searchText));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <SearchBarWrapper>
      <Title>News</Title>
      <InputWrapper>
        <SearchField
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search"
        />
        {searchText.trim().length > 0 && (
          <ClearButton type="submit" onClick={handleClearSearch}>
            <ClearIcon />
          </ClearButton>
        )}
        <SearchButton type="submit" onClick={handleSubmit}>
          <SearchIcon />
        </SearchButton>
      </InputWrapper>
    </SearchBarWrapper>
  );
};
