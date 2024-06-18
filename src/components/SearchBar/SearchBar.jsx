import { useState } from 'react';
import {
  SearchBarWrapper,
  Title,
  InputWrapper,
  SearchInput,
  SearchButton,
  SearchIcon,
} from './SearchBar.styled';

export const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSubmit = () => {};

  return (
    <SearchBarWrapper>
      <Title>News</Title>
      <InputWrapper>
        <SearchInput
          type="text"
          value={searchText}
          onChange={e => setSearchText(e.currentTarget.value)}
          placeholder="Search"
        />
        <SearchButton type="submit" onSubmit={handleSubmit}>
          <SearchIcon
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.7498 15.75L12.4873 12.4875"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SearchIcon>
        </SearchButton>
      </InputWrapper>
    </SearchBarWrapper>
  );
};
