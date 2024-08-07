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
  Line,
  UnderLineContainer,
  SortingButton,
} from './NoticesFilter.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllCategories,
  getAllSex,
  getAllSpecies,
} from 'redux/notices/operations';
import {
  selectAllCategories,
  selectAllSex,
  selectAllSpecies,
} from 'redux/notices/selectors';
import {
  setCategory,
  setGender,
  setKeyword,
  setPopularity,
  setType,
} from 'redux/notices/noticesSlice';

export const NoticesFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const [valueChecked, setValueChecked] = useState(null);

  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const genders = useSelector(selectAllSex);
  const types = useSelector(selectAllSpecies);

  const categoriesOptions = categories.map(category => {
    return { value: category, label: category };
  });
  const genderOptions = genders.map(gender => {
    return { value: gender, label: gender };
  });
  const typeOptions = types.map(type => {
    return { value: type, label: type };
  });

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSex());
    dispatch(getAllSpecies());
  }, [dispatch]);

  const handleClearSearch = () => {
    setSearchValue('');
    dispatch(setKeyword(searchValue));
  };

  const handleCategoryChange = selectedOption => {
    if (selectedOption.value === 'show all') {
      dispatch(setCategory(null));
    } else {
      dispatch(setCategory(selectedOption.value));
    }
  };

  const handleGenderChange = selectedOption => {
    if (selectedOption.value === 'show all') {
      dispatch(setGender(null));
    } else {
      dispatch(setGender(selectedOption.value));
    }
  };

  const handleTypeChange = selectedOption => {
    if (selectedOption.value === 'show all') {
      dispatch(setType(null));
    } else {
      dispatch(setType(selectedOption.value));
    }
  };

  const handleValueChange = e => {
    setValueChecked(e.target.name);
    dispatch(setPopularity(e.target.name));
  };

  const handleClearSorting = e => {
    setValueChecked(null);
    dispatch(setPopularity(null));
  };

  const handleSubmit = () => {
    dispatch(setKeyword(searchValue));
  };

  return (
    <Formik initialValues={{ search: searchValue }} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <FormWrapper>
          <AboveLineContainer>
            <SearchLabel>
              <SearchField
                type="text"
                name="search"
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
                  name="category"
                  onChange={handleCategoryChange}
                  placeholder="Category"
                  styles={customDropDownStyles}
                />
              </CategoryGenderLabel>
              <CategoryGenderLabel>
                <DropDown
                  options={genderOptions}
                  name="gender"
                  onChange={handleGenderChange}
                  placeholder="By gender"
                  styles={customDropDownStyles}
                />
              </CategoryGenderLabel>
            </CategoryGenderWrapper>

            <TypeLabel>
              <DropDown
                options={typeOptions}
                name="type"
                onChange={handleTypeChange}
                placeholder="By type"
                styles={customDropDownStylesForType}
              />
            </TypeLabel>
          </AboveLineContainer>

          <Line></Line>

          <UnderLineContainer>
            <SortingButton
              type="button"
              name="popular"
              checked={valueChecked === 'popular'}
              onClick={handleValueChange}
            >
              Popular
              {valueChecked === 'popular' && (
                <Icon
                  onClick={handleClearSorting}
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
              name="unpopular"
              checked={valueChecked === 'unpopular'}
              onClick={handleValueChange}
            >
              Unpopular
              {valueChecked === 'unpopular' && (
                <Icon
                  onClick={handleClearSorting}
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
          </UnderLineContainer>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
