import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { getAllCategories, getAllSex, getAllSpecies } from 'redux/notices/operations';
import { selectAllCategories, selectAllSex, selectAllSpecies, selectFilters } from 'redux/notices/selectors';
import {
  setCategory,
  setGender,
  setKeyword,
  setPopularity,
  setResetFilters,
  setType,
} from 'redux/notices/noticesSlice';
import {
  FormWrapper,
  ClearIcon,
  SearchIcon,
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
  ResetFiltersButton,
} from './NoticesFilter.styled';

export const NoticesFilter = () => {
  const [searchValue, setSearchValue] = useState('');
  const [valueChecked, setValueChecked] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const dispatch = useDispatch();
  const categories = useSelector(selectAllCategories);
  const genders = useSelector(selectAllSex);
  const types = useSelector(selectAllSpecies);
  const allFilters = useSelector(selectFilters);

  const categoriesOptions = categories.map(category => {
    return { value: category, label: category };
  });
  const genderOptions = genders.map(gender => {
    return { value: gender, label: gender };
  });
  const typeOptions = types.map(type => {
    return { value: type, label: type };
  });

  const isFiltersActive = Object.values(allFilters).some(value => value !== null && value !== '');

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllSex());
    dispatch(getAllSpecies());
  }, [dispatch]);

  useEffect(() => {
    if (searchValue === '') {
      dispatch(setKeyword(searchValue));
    }
  }, [searchValue, dispatch]);

  const handleCategoryChange = selectedOption => {
    setSelectedCategory(selectedOption);
    if (selectedOption.value === 'show all') {
      dispatch(setCategory(null));
    } else {
      dispatch(setCategory(selectedOption.value));
    }
  };

  const handleGenderChange = selectedOption => {
    setSelectedGender(selectedOption);
    if (selectedOption.value === 'show all') {
      dispatch(setGender(null));
    } else {
      dispatch(setGender(selectedOption.value));
    }
  };

  const handleTypeChange = selectedOption => {
    setSelectedType(selectedOption);
    if (selectedOption.value === 'show all') {
      dispatch(setType(null));
    } else {
      dispatch(setType(selectedOption.value));
    }
  };

  const handleValueChange = e => {
    if (!e.target.name) {
      setValueChecked(null);
      dispatch(setPopularity(null));
      return;
    }

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

  const handleResetFilters = () => {
    setSelectedCategory(null);
    setSelectedGender(null);
    setSelectedType(null);
    setSearchValue('');
    setValueChecked(null);
    dispatch(setResetFilters(''));
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
                <ClearButton type="button" onClick={() => setSearchValue('')}>
                  <ClearIcon />
                </ClearButton>
              )}
              <SearchButton type="submit">
                <SearchIcon />
              </SearchButton>
            </SearchLabel>

            <CategoryGenderWrapper>
              <CategoryGenderLabel>
                <DropDown
                  options={categoriesOptions}
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  placeholder="Category"
                  styles={customDropDownStyles}
                />
              </CategoryGenderLabel>
              <CategoryGenderLabel>
                <DropDown
                  options={genderOptions}
                  name="gender"
                  value={selectedGender}
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
                value={selectedType}
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
              {valueChecked === 'popular' && <ClearIcon onClick={handleClearSorting} />}
            </SortingButton>
            <SortingButton
              type="button"
              name="unpopular"
              checked={valueChecked === 'unpopular'}
              onClick={handleValueChange}
            >
              Unpopular
              {valueChecked === 'unpopular' && <ClearIcon onClick={handleClearSorting} />}
            </SortingButton>
            {isFiltersActive && (
              <ResetFiltersButton type="button" onClick={handleResetFilters}>
                Reset filters
              </ResetFiltersButton>
            )}
          </UnderLineContainer>
        </FormWrapper>
      </Form>
    </Formik>
  );
};
