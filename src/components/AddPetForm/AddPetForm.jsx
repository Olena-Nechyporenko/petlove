import { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import {
  AddPetFormWrapper,
  Title,
  SubTitle,
  IconsWrapper,
  FemaleLabel,
  MaleLabel,
  UnknownLabel,
  StyledField,
  StyledIcon,
  ImgWrapper,
  Img,
  FieldsWrapper,
  InputAndButtonWrapp,
  InputUrl,
  ErrorWrapper,
  UploadPhotoButton,
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
import img from '../../images/register-tab.jpg';

const types = ['Dog', 'Cat', 'Monkey', 'Bird', 'Snake', 'Turtle', 'Lizard'];

const typeOptions = types.map(type => {
  return { value: type, label: type };
});

// const regex = {
//   urlRegex: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
//   birthdayRegex: /^\d{4}-\d{2}-\d{2}$/,
// };

// const validationSchema = Yup.object().shape({
//   avatar: Yup.string().matches(regex.urlRegex, 'Invalid url format').required(),
//   title: Yup.string().required('Title is a required field'),
//   name: Yup.string().required('Name is a required field'),
//   birthday: Yup.string().matches(regex.birthdayRegex, 'Invalid date format').required('Birthday is a required field'),
//   species: Yup.string().required('Species is a required field'),
// });

export const AddPetForm = () => {
  const [petSex, setPetSex] = useState('male');
  //   console.log(petSex);

  const handleRadioChange = e => {
    setPetSex(e.target.value);
  };
  return (
    <AddPetFormWrapper>
      <Title>
        Add my pet /<SubTitle>Personal details</SubTitle>
      </Title>

      <Formik
      // initialValues={initialValues}
      // validationSchema={validationSchema}
      // onSubmit={submitForm}
      >
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

                <StyledIcon
                  checked={'female' === petSex}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0007 10.8333C12.3018 10.8333 14.1673 8.96785 14.1673 6.66667C14.1673 4.36548 12.3018 2.5 10.0007 2.5C7.69947 2.5 5.83398 4.36548 5.83398 6.66667C5.83398 8.96785 7.69946 10.8333 10.0007 10.8333ZM10.0007 10.8333L10.0007 17.5M7.50065 15L12.5007 15"
                    stroke="#F43F5E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </StyledIcon>
              </FemaleLabel>

              <MaleLabel checked={'male' === petSex}>
                <StyledField
                  onChange={handleRadioChange}
                  checked={'male' === petSex}
                  type="radio"
                  name="sex"
                  value={'male'}
                />

                <StyledIcon
                  checked={'male' === petSex}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0007 9.16667C7.69946 9.16667 5.83398 11.0321 5.83398 13.3333C5.83398 15.6345 7.69946 17.5 10.0007 17.5C12.3018 17.5 14.1673 15.6345 14.1673 13.3333C14.1673 11.0321 12.3018 9.16667 10.0007 9.16667ZM10.0007 9.16667V2.5M10.0007 2.5L13.334 5.83333M10.0007 2.5L6.66732 5.83333"
                    stroke="#54ADFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </StyledIcon>
              </MaleLabel>

              <UnknownLabel checked={'unknown' === petSex}>
                <StyledField
                  onChange={handleRadioChange}
                  checked={'unknown' === petSex}
                  type="radio"
                  name="sex"
                  value={'unknown'}
                />

                <StyledIcon
                  checked={'unknown' === petSex}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.30895 6.45415C6.71093 6.22062 6.05254 6.19101 5.43597 6.36992C4.8194 6.54882 4.27912 6.92624 3.89898 7.4436C3.51884 7.96096 3.32009 8.58933 3.33359 9.23119C3.34708 9.87305 3.57206 10.4925 3.97361 10.9934C4.37516 11.4944 4.93082 11.8487 5.55437 12.0016C6.17791 12.1544 6.83447 12.0972 7.42215 11.8387C8.00983 11.5802 8.49576 11.135 8.80454 10.5722C9.11333 10.0093 9.22768 9.36024 9.12987 8.72573C9.12156 8.67166 9.12398 8.61649 9.13699 8.56336C9.15 8.51022 9.17334 8.46018 9.2057 8.41607C9.23805 8.37196 9.27877 8.33465 9.32554 8.30628C9.37231 8.27791 9.42421 8.25903 9.47827 8.25071C9.53234 8.2424 9.58751 8.24482 9.64065 8.25783C9.69378 8.27084 9.74383 8.29418 9.78794 8.32653C9.83205 8.35889 9.86935 8.39961 9.89772 8.44638C9.9261 8.49315 9.94498 8.54505 9.95329 8.59911C10.0789 9.41489 9.93175 10.2493 9.53467 10.9729C9.13759 11.6965 8.51277 12.2688 7.75719 12.601C7.0016 12.9333 6.15749 13.0068 5.35584 12.8102C4.55419 12.6137 3.83983 12.158 3.32361 11.514C2.80738 10.87 2.51816 10.0735 2.50083 9.24832C2.48349 8.42311 2.73901 7.61525 3.22773 6.9501C3.71645 6.28494 4.41104 5.7997 5.20373 5.56965C5.99642 5.3396 6.84287 5.37762 7.61174 5.6778C7.66339 5.69717 7.71067 5.72661 7.75085 5.7644C7.79103 5.80219 7.8233 5.84759 7.84579 5.89796C7.86828 5.94832 7.88054 6.00265 7.88186 6.0578C7.88318 6.11294 7.87354 6.1678 7.85349 6.21918C7.83343 6.27057 7.80337 6.31746 7.76505 6.35713C7.72673 6.39681 7.68091 6.42847 7.63025 6.4503C7.57959 6.47212 7.5251 6.48366 7.46994 6.48425C7.41479 6.48484 7.36006 6.47488 7.30895 6.45415Z"
                    fill="#F6B83D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.83203 16.2502V12.9182C5.83203 12.8077 5.87591 12.7018 5.95402 12.6237C6.03213 12.5456 6.13807 12.5017 6.24853 12.5017C6.35899 12.5017 6.46493 12.5456 6.54304 12.6237C6.62115 12.7018 6.66503 12.8077 6.66503 12.9182V16.2502C6.66503 16.3606 6.62115 16.4666 6.54304 16.5447C6.46493 16.6228 6.35899 16.6667 6.24853 16.6667C6.13807 16.6667 6.03213 16.6228 5.95402 16.5447C5.87591 16.4666 5.83203 16.3606 5.83203 16.2502Z"
                    fill="#F6B83D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.58203 14.1677C4.58203 14.0572 4.62591 13.9513 4.70402 13.8732C4.78213 13.7951 4.88807 13.7512 4.99853 13.7512H7.49751C7.60798 13.7512 7.71391 13.7951 7.79202 13.8732C7.87013 13.9513 7.91401 14.0572 7.91401 14.1677C7.91401 14.2781 7.87013 14.3841 7.79202 14.4622C7.71391 14.5403 7.60798 14.5842 7.49751 14.5842H4.99853C4.88807 14.5842 4.78213 14.5403 4.70402 14.4622C4.62591 14.3841 4.58203 14.2781 4.58203 14.1677ZM12.0382 6.36377C11.5766 6.23347 11.09 6.21905 10.6215 6.32178C10.1531 6.42452 9.71717 6.64124 9.35249 6.95274C8.98781 7.26424 8.70561 7.6609 8.5309 8.10755C8.35619 8.55421 8.29437 9.03707 8.35092 9.51333C8.35768 9.56779 8.35361 9.62305 8.33894 9.67593C8.32428 9.72881 8.2993 9.77827 8.26546 9.82147C8.23162 9.86467 8.18957 9.90076 8.14174 9.92766C8.09391 9.95456 8.04123 9.97174 7.98674 9.97821C7.93224 9.98469 7.87701 9.98033 7.8242 9.96539C7.7714 9.95045 7.72207 9.92522 7.67904 9.89116C7.63602 9.85709 7.60015 9.81486 7.5735 9.76689C7.54685 9.71891 7.52995 9.66615 7.52375 9.61162C7.42645 8.79197 7.6024 7.96311 8.02431 7.25368C8.44621 6.54425 9.09049 5.99391 9.85714 5.68806C10.6238 5.38222 11.47 5.33797 12.2643 5.56219C13.0587 5.7864 13.7569 6.26655 14.2505 6.92811C14.7441 7.58967 15.0055 8.39565 14.9942 9.22098C14.9829 10.0463 14.6995 10.8448 14.188 11.4927C13.6765 12.1405 12.9655 12.6013 12.1653 12.8037C11.3651 13.0061 10.5204 12.9388 9.76243 12.6121C9.71219 12.5904 9.6667 12.5591 9.62857 12.5199C9.59043 12.4807 9.5604 12.4344 9.54017 12.3835C9.49932 12.2809 9.50091 12.1663 9.5446 12.0648C9.58829 11.9633 9.67049 11.8834 9.77312 11.8425C9.87576 11.8017 9.99042 11.8033 10.0919 11.847C10.4583 12.0048 10.8533 12.0858 11.2523 12.0849C11.6513 12.084 12.0458 12.0012 12.4115 11.8416C12.7772 11.682 13.1063 11.4491 13.3783 11.1572C13.6503 10.8653 13.8596 10.5207 13.993 10.1447C14.1265 9.76867 14.1814 9.36927 14.1543 8.97119C14.1271 8.57311 14.0186 8.18484 13.8353 7.83041C13.6521 7.47598 13.398 7.16294 13.0889 6.91067C12.7798 6.65839 12.4221 6.47225 12.0382 6.36377Z"
                    fill="#F6B83D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.6591 7.17344C13.581 7.09533 13.5371 6.98941 13.5371 6.87897C13.5371 6.76853 13.581 6.66261 13.6591 6.58451L16.7828 3.46078C16.8212 3.421 16.8672 3.38927 16.918 3.36744C16.9688 3.34561 17.0234 3.33412 17.0787 3.33364C17.134 3.33316 17.1889 3.3437 17.2401 3.36464C17.2913 3.38558 17.3378 3.41651 17.3769 3.45562C17.416 3.49472 17.4469 3.54122 17.4678 3.59241C17.4888 3.6436 17.4993 3.69844 17.4988 3.75374C17.4984 3.80904 17.4869 3.8637 17.4651 3.91451C17.4432 3.96533 17.4115 4.01128 17.3717 4.0497L14.248 7.17344C14.1699 7.25152 14.064 7.29538 13.9535 7.29538C13.8431 7.29538 13.7372 7.25152 13.6591 7.17344Z"
                    fill="#F6B83D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.0455 6.25423C16.9908 6.25353 16.9368 6.24205 16.8865 6.22047C16.8362 6.19888 16.7907 6.1676 16.7526 6.12842C16.7144 6.08925 16.6843 6.04293 16.664 5.99212C16.6438 5.94132 16.6337 5.88702 16.6344 5.83232L16.6552 4.17716L15.0001 4.19798C14.8896 4.19942 14.7831 4.15692 14.704 4.07982C14.6249 4.00273 14.5796 3.89736 14.5782 3.7869C14.5767 3.67644 14.6192 3.56993 14.6963 3.49081C14.7734 3.41168 14.8788 3.36643 14.9892 3.36499L17.4991 3.33334L17.4674 5.84315C17.4667 5.89785 17.4552 5.95187 17.4336 6.00213C17.4121 6.05239 17.3808 6.09791 17.3416 6.13608C17.3024 6.17426 17.2561 6.20434 17.2053 6.22461C17.1545 6.24488 17.1002 6.25495 17.0455 6.25423Z"
                    fill="#F6B83D"
                  />
                </StyledIcon>
              </UnknownLabel>
            </IconsWrapper>
          </div>

          <ImgWrapper>
            <Img src={img} alt="" />
          </ImgWrapper>

          <FieldsWrapper>
            <InputAndButtonWrapp>
              <label>
                <InputUrl type="url" name="avatar" value="" placeholder="Enter URL" />
                <ErrorWrapper>
                  <ErrorMessage name="avatar" />
                </ErrorWrapper>
              </label>

              <UploadPhotoButton>
                Upload photo
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 12L9 9L6 12"
                    stroke="#F6B83D"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9V15.75"
                    stroke="#F6B83D"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.2926 13.7925C16.0241 13.3937 16.602 12.7626 16.935 11.999C17.268 11.2353 17.3372 10.3824 17.1317 9.575C16.9262 8.7676 16.4577 8.05162 15.8001 7.54007C15.1425 7.02852 14.3332 6.75054 13.5001 6.74999H12.5551C12.3281 5.87192 11.905 5.05674 11.3175 4.36573C10.7301 3.67473 9.99372 3.12588 9.16366 2.76044C8.3336 2.39501 7.4315 2.22251 6.52518 2.2559C5.61885 2.28929 4.73189 2.52771 3.93097 2.95324C3.13006 3.37876 2.43602 3.98031 1.90106 4.71267C1.36609 5.44503 1.00411 6.28914 0.842327 7.18153C0.680545 8.07393 0.723171 8.99138 0.967002 9.86493C1.21083 10.7385 1.64952 11.5454 2.25009 12.225"
                    stroke="#F6B83D"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L9 9L6 12"
                    stroke="#F6B83D"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </UploadPhotoButton>
            </InputAndButtonWrapp>
            <label>
              <Input type="text" name="title" placeholder={'Title'} value={''} />
              <ErrorWrapper>
                <ErrorMessage name="title" />
              </ErrorWrapper>
            </label>
            <label>
              <Input type="text" name="name" placeholder={'Pet`s Name'} value={''} />
              <ErrorWrapper>
                <ErrorMessage name="name" />
              </ErrorWrapper>
            </label>

            <BirthdayTypeWrapper>
              <label>
                <BirthdayInput type="text" name="birthday" placeholder={'00.00.0000'} value={''} />
                <ErrorWrapper>
                  <ErrorMessage name="birthday" />
                </ErrorWrapper>
              </label>

              <TypeLabel>
                <DropDown
                  name="species"
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
      </Formik>
    </AddPetFormWrapper>
  );
};
