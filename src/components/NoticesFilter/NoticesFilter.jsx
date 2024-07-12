import { Formik, Form } from 'formik';
import {
  FormWrapper,
  Icon,
  AboveLineContainer,
  SearchLabel,
  SearchField,
  SearchButton,
  ClearButton,
  CategoryGenderWrapper,
  CategoryGenderLabel,
  DropDown,
  TypeLabel,
  customDropDownStyles,
  customDropDownStylesForType,
  LocationLabel,
  Line,
  UnderLineContainer,
  SortingButton,
} from './NoticesFilter.styled';
import { useState } from 'react';

const categories = ['Show all', 'See', 'Free', 'Lost', 'Found'];
const genders = ['Show all', 'Unknown', 'Female', 'Male', 'Multiple'];
const types = [
  'Show all',
  'Dog',
  'Cat',
  'Monkey',
  'Bird',
  'Snake',
  'Turtle',
  'Lizard',
];
const categoriesOptions = categories.map(category => {
  return { value: category, label: category };
});
const genderOptions = genders.map(gender => {
  return { value: gender, label: gender };
});
const typeOptions = types.map(type => {
  return { value: type, label: type };
});

export const NoticesFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const [valueChecked, setValueChecked] = useState(null);
  const [locationValue, setLocationValue] = useState('');

  const handleValueChange = value => {
    setValueChecked(value);
  };

  const handleClearSelection = e => {
    e.stopPropagation();
    setValueChecked(null);
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  const handleClearLocation = () => {
    setLocationValue('');
  };
  return (
    <Formik
    //   initialValues={{ brands: brand, prices: price }}
    //   onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <FormWrapper>
          <AboveLineContainer>
            <SearchLabel>
              <SearchField
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
              />
              {searchValue.trim().length > 0 && (
                <ClearButton type="button" onClick={handleClearSearch}>
                  <Icon
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 3.75L3.75 14.25M3.75003 3.75L14.25 14.25"
                      stroke="#262626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                </ClearButton>
              )}
              <SearchButton type="submit">
                <Icon
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
                </Icon>
              </SearchButton>
            </SearchLabel>

            <CategoryGenderWrapper>
              <CategoryGenderLabel>
                <DropDown
                  options={categoriesOptions}
                  placeholder="Category"
                  styles={customDropDownStyles}
                />
              </CategoryGenderLabel>
              <CategoryGenderLabel>
                <DropDown
                  options={genderOptions}
                  placeholder="By gender"
                  styles={customDropDownStyles}
                />
              </CategoryGenderLabel>
            </CategoryGenderWrapper>

            <TypeLabel>
              <DropDown
                options={typeOptions}
                placeholder="By type"
                styles={customDropDownStylesForType}
              />
            </TypeLabel>

            <LocationLabel>
              <SearchField
                type="text"
                placeholder="Location"
                value={locationValue}
                onChange={e => setLocationValue(e.target.value)}
              />
              {locationValue.trim().length > 0 && (
                <ClearButton type="button" onClick={handleClearLocation}>
                  <Icon
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 3.75L3.75 14.25M3.75003 3.75L14.25 14.25"
                      stroke="#262626"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Icon>
                </ClearButton>
              )}
              <SearchButton type="submit">
                <Icon
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
                </Icon>
              </SearchButton>
            </LocationLabel>
          </AboveLineContainer>

          <Line></Line>

          <UnderLineContainer>
            <SortingButton
              type="button"
              checked={valueChecked === 'popular'}
              onClick={() => handleValueChange('popular')}
            >
              Popular
              {valueChecked === 'popular' && (
                <Icon
                  onClick={handleClearSelection}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L4.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 4.5L13.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
              )}
            </SortingButton>
            <SortingButton
              type="button"
              checked={valueChecked === 'unpopular'}
              onClick={() => handleValueChange('unpopular')}
            >
              Unpopular
              {valueChecked === 'unpopular' && (
                <Icon
                  onClick={handleClearSelection}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L4.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 4.5L13.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
              )}
            </SortingButton>
            <SortingButton
              type="button"
              checked={valueChecked === 'cheap'}
              onClick={() => handleValueChange('cheap')}
            >
              Cheap
              {valueChecked === 'cheap' && (
                <Icon
                  onClick={handleClearSelection}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L4.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 4.5L13.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
              )}
            </SortingButton>
            <SortingButton
              type="button"
              checked={valueChecked === 'expensive'}
              onClick={() => handleValueChange('expensive')}
            >
              Expensive
              {valueChecked === 'expensive' && (
                <Icon
                  onClick={handleClearSelection}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5L4.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 4.5L13.5 13.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
              )}
            </SortingButton>
            {/* <RadioLabel htmlFor="popular">
              Popular
              <RadioButton
                type="radio"
                name="sorting"
                value="popular"
                onChange={handleValueChange}
                checked={valueChecked === 'popular'}
              />
            </RadioLabel>
            <RadioLabel htmlFor="unpopular">
              Unpopular
              <RadioButton
                type="radio"
                name="sorting"
                value="unpopular"
                onChange={handleValueChange}
                checked={valueChecked === 'unpopular'}
              />
            </RadioLabel>
            <RadioLabel htmlFor="cheap">
              Cheap
              <RadioButton
                type="radio"
                name="sorting"
                value="cheap"
                onChange={handleValueChange}
                checked={valueChecked === 'cheap'}
              />
            </RadioLabel>
            <RadioLabel htmlFor="expensive">
              Expensive
              <RadioButton
                type="radio"
                name="sorting"
                value="expensive"
                onChange={handleValueChange}
                checked={valueChecked === 'expensive'}
              />
            </RadioLabel> */}
          </UnderLineContainer>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
