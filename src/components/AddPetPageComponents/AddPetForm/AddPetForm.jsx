import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import { addPet } from 'redux/userProfile/operations';
import { getAllSpecies } from 'redux/notices/operations';
import {
  AddPetFormWrapper,
  Title,
  SubTitle,
  IconsWrapper,
  FemaleLabel,
  MaleLabel,
  UnknownLabel,
  StyledField,
  IconWrapper,
  FemaleIcon,
  MaleIcon,
  UnknownIcon,
  ImageWrapper,
  FieldsWrapper,
  InputLabel,
  ErrorWrapper,
  Input,
  BirthdayTypeWrapper,
  BirthdayInput,
  TypeLabel,
  DropDown,
  customDropDownStyles,
  ButtonsWrapper,
  BackLink,
  SubmitButton,
} from './AddPetForm.styled';
import catFootprintImg from '../../../images/add-pet/add-pet-cat-footprint.png';

const validationSchema = Yup.object().shape({
  sex: Yup.string().oneOf(['female', 'male', 'unknown'], 'Invalid selection for sex').required('Sex is required field'),
  title: Yup.string().required('Title is required field'),
  name: Yup.string().required("Pet's name is required field"),
  birthday: Yup.string().required('Birthday is required field'),
});

const types = ['dog', 'cat', 'monkey', 'bird', 'snake', 'turtle', 'lizard'];

const typeOptions = types.map(type => {
  return { value: type, label: type };
});

export const AddPetForm = () => {
  const [petSex, setPetSex] = useState('female');
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRadioChange = e => {
    setPetSex(e.target.value);
  };

  const handleSubmit = values => {
    const petData = {
      title: values.title,
      name: values.name,
      imgURL: 'https://cdn.pixabay.com/photo/2023/09/07/14/26/cat-8239223_1280.png',
      species: selectedSpecies,
      birthday: values.birthday,
      sex: petSex,
    };

    dispatch(addPet(petData));

    navigate('/profile');
  };

  useEffect(() => {
    dispatch(getAllSpecies());
  }, [dispatch]);

  return (
    <AddPetFormWrapper>
      <Title>
        Add my pet /<SubTitle>Personal details</SubTitle>
      </Title>

      <Formik
        initialValues={{
          title: '',
          name: '',
          species: '',
          birthday: '',
          sex: petSex,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div id="radio-group">
              <IconsWrapper role="group" aria-labelledby="radio-group">
                <FemaleLabel checked={'female' === petSex}>
                  <StyledField
                    onChange={handleRadioChange}
                    checked={'female' === petSex}
                    type="radio"
                    name="sex"
                    value={'female'}
                  />
                  <IconWrapper checked={'female' === petSex}>
                    <FemaleIcon />
                  </IconWrapper>
                </FemaleLabel>

                <MaleLabel checked={'male' === petSex}>
                  <StyledField
                    onChange={handleRadioChange}
                    checked={'male' === petSex}
                    type="radio"
                    name="sex"
                    value={'male'}
                  />

                  <IconWrapper checked={'male' === petSex}>
                    <MaleIcon />
                  </IconWrapper>
                </MaleLabel>

                <UnknownLabel checked={'unknown' === petSex}>
                  <StyledField
                    onChange={handleRadioChange}
                    checked={'unknown' === petSex}
                    type="radio"
                    name="sex"
                    value={'unknown'}
                  />

                  <IconWrapper checked={'unknown' === petSex}>
                    <UnknownIcon />
                  </IconWrapper>
                </UnknownLabel>

                <ErrorWrapper>
                  <ErrorMessage name="sex" />
                </ErrorWrapper>
              </IconsWrapper>
            </div>

            <ImageWrapper>
              <img src={catFootprintImg} alt="cat footprint" width={44} height={44} />
            </ImageWrapper>

            <FieldsWrapper>
              <InputLabel>
                <Input type="text" name="title" placeholder={'Title'} hasError={errors.title && touched.title} />
                <ErrorWrapper>
                  <ErrorMessage name="title" />
                </ErrorWrapper>
              </InputLabel>
              <InputLabel>
                <Input type="text" name="name" placeholder={'Pet`s Name'} hasError={errors.name && touched.name} />
                <ErrorWrapper>
                  <ErrorMessage name="name" />
                </ErrorWrapper>
              </InputLabel>

              <BirthdayTypeWrapper>
                <InputLabel>
                  <BirthdayInput type="date" name="birthday" hasError={errors.birthday && touched.birthday} />
                  <ErrorWrapper>
                    <ErrorMessage name="birthday" />
                  </ErrorWrapper>
                </InputLabel>

                <TypeLabel>
                  <DropDown
                    name="species"
                    onChange={selectedOption => setSelectedSpecies(selectedOption.value)}
                    options={typeOptions}
                    placeholder="Type of pet"
                    styles={customDropDownStyles}
                  />
                </TypeLabel>
              </BirthdayTypeWrapper>
            </FieldsWrapper>

            <ButtonsWrapper>
              <BackLink to="/profile">Back</BackLink>
              <SubmitButton type="submit">Submit</SubmitButton>
            </ButtonsWrapper>
          </Form>
        )}
      </Formik>
    </AddPetFormWrapper>
  );
};
