import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import { logIn } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import {
  FormWrapper,
  SubTitle,
  Title,
  StyledForm,
  FieldsWrapper,
  InputLabel,
  Input,
  PasswordHideBtn,
  VisiblePasswordIcon,
  InvisiblePasswordIcon,
  ErrorWrapper,
  StyledButton,
  RegisterLinkWrapper,
  Link,
  InputWrapper,
} from './LoginForm.styled';

const loaderStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().matches(emailRegex, 'Enter a valid Email').required('Email is a required field').trim(),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long.')
    .required('Password is a required field')
    .trim(),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const toggleHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = (values, { resetForm }) => {
    const userData = {
      email: values.email.trim(),
      password: values.password.trim(),
    };

    dispatch(logIn(userData));

    resetForm();
  };

  return (
    <FormWrapper>
      <Title>Log in</Title>
      <SubTitle>Welcome! Please enter your credentials to login to the platform:</SubTitle>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
        {({ errors, touched }) => (
          <StyledForm>
            <FieldsWrapper>
              <InputLabel>
                <InputWrapper>
                  <Input type="text" name="email" placeholder={'Email'} hasError={errors.email && touched.email} />
                </InputWrapper>

                <ErrorWrapper>
                  <ErrorMessage name="email" />
                </ErrorWrapper>
              </InputLabel>

              <InputLabel>
                <InputWrapper>
                  <Input
                    name="password"
                    placeholder={'Password'}
                    type={showPassword ? 'text' : 'password'}
                    hasError={errors.password && touched.password}
                  />
                  <PasswordHideBtn type="button" onClick={toggleHidePassword}>
                    {showPassword ? <VisiblePasswordIcon /> : <InvisiblePasswordIcon />}
                  </PasswordHideBtn>
                </InputWrapper>
                <ErrorWrapper>
                  <ErrorMessage name="password" />
                </ErrorWrapper>
              </InputLabel>
            </FieldsWrapper>

            {isLoading ? (
              <StyledButton type="submit" disabled={true}>
                <TailSpin
                  visible={true}
                  height="32"
                  width="32"
                  color="var(--main-light-txt-color)"
                  ariaLabel="tail-spin-loading"
                  radius="2"
                  wrapperStyle={loaderStyle}
                />
              </StyledButton>
            ) : (
              <StyledButton type="submit">Log In</StyledButton>
            )}

            <RegisterLinkWrapper>
              Don't have an account?&nbsp;
              <Link to="/register">Register</Link>
            </RegisterLinkWrapper>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
