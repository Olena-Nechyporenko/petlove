import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import {
  FormWrapper,
  SubTitle,
  Title,
  StyledForm,
  FieldsWrapper,
  Input,
  PasswordHideBtn,
  PasswordIcon,
  ErrorWrapper,
  StyledButton,
  RegisterLinkWrapper,
  Link,
  InputWrapper,
} from './LoginForm.styled';
import { useState } from 'react';

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Enter a valid Email')
    .required('Email is a required field'),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long.')
    .required('Password is a required field'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = () => {};

  return (
    <FormWrapper>
      <Title>Log in</Title>
      <SubTitle>
        Welcome! Please enter your credentials to login to the platform:
      </SubTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitForm}
      >
        <StyledForm>
          <FieldsWrapper>
            <label>
              <InputWrapper>
                <Input type="text" name="email" placeholder={'Email'} />
              </InputWrapper>

              <ErrorWrapper>
                <ErrorMessage name="email" />
              </ErrorWrapper>
            </label>

            <label>
              <InputWrapper>
                <Input
                  name="password"
                  placeholder={'Password'}
                  type={showPassword ? 'text' : 'password'}
                />
                <PasswordHideBtn type="button" onClick={toggleHidePassword}>
                  <PasswordIcon
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_55812_443)">
                      <path
                        d="M13.455 13.455C12.1729 14.4322 10.6118 14.9736 9 15C3.75 15 0.75 8.99999 0.75 8.99999C1.68292 7.26141 2.97685 5.74244 4.545 4.54499M7.425 3.17999C7.94125 3.05915 8.4698 2.99874 9 2.99999C14.25 2.99999 17.25 8.99999 17.25 8.99999C16.7947 9.85169 16.2518 10.6535 15.63 11.3925M10.59 10.59C10.384 10.811 10.1356 10.9884 9.85962 11.1113C9.58362 11.2343 9.28568 11.3004 8.98357 11.3058C8.68146 11.3111 8.38137 11.2555 8.10121 11.1424C7.82104 11.0292 7.56654 10.8608 7.35289 10.6471C7.13923 10.4334 6.9708 10.1789 6.85763 9.89878C6.74447 9.61862 6.6889 9.31853 6.69423 9.01642C6.69956 8.71431 6.76568 8.41637 6.88866 8.14037C7.01163 7.86438 7.18894 7.61597 7.41 7.40999"
                        stroke="#F6B83D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0.75 0.75L17.25 17.25"
                        stroke="#F6B83D"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_55812_443">
                        <rect width="18" height="18" fill="white" />
                      </clipPath>
                    </defs>
                  </PasswordIcon>
                </PasswordHideBtn>
              </InputWrapper>
              <ErrorWrapper>
                <ErrorMessage name="password" />
              </ErrorWrapper>
            </label>
          </FieldsWrapper>
          <StyledButton type="submit">Log In</StyledButton>
          <RegisterLinkWrapper>
            Don't have an account?&nbsp;
            <Link to="register">Register</Link>
          </RegisterLinkWrapper>
        </StyledForm>
      </Formik>
    </FormWrapper>
  );
};
