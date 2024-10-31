import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { TailSpin } from 'react-loader-spinner';
import { register } from 'redux/auth/operations';
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
  LoginLinkWrapper,
  Link,
  InputWrapper,
} from './RegisterForm.styled';

const loaderStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is a required field').trim(),
  email: Yup.string().matches(emailRegex, 'Enter a valid Email').required('Email is a required field').trim(),
  password: Yup.string()
    .min(7, 'Password must be at least 7 characters long.')
    .required('Password is a required field')
    .trim(),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(7, 'Password must be at least 7 characters long.')
    .required('Password confirm is a required field')
    .trim(),
});

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const toggleHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleHidePasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const submitForm = (values, { resetForm }) => {
    const userData = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };

    dispatch(register(userData));

    resetForm();
  };

  return (
    <FormWrapper>
      <Title>Registration</Title>
      <SubTitle>Thank you for your interest in our platform.</SubTitle>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitForm}>
        {({ errors, touched }) => (
          <StyledForm>
            <FieldsWrapper>
              <InputLabel>
                <InputWrapper>
                  <Input type="text" name="name" placeholder={'Name'} hasError={errors.name && touched.name} />
                </InputWrapper>

                <ErrorWrapper>
                  <ErrorMessage name="name" />
                </ErrorWrapper>
              </InputLabel>

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

              <InputLabel>
                <InputWrapper>
                  <Input
                    name="passwordConfirm"
                    placeholder={'Confirm password'}
                    type={showPasswordConfirm ? 'text' : 'password'}
                    hasError={errors.passwordConfirm && touched.passwordConfirm}
                  />
                  <PasswordHideBtn type="button" onClick={toggleHidePasswordConfirm}>
                    {showPasswordConfirm ? <VisiblePasswordIcon /> : <InvisiblePasswordIcon />}
                  </PasswordHideBtn>
                </InputWrapper>
                <ErrorWrapper>
                  <ErrorMessage name="passwordConfirm" />
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
              <StyledButton type="submit">Registration</StyledButton>
            )}

            <LoginLinkWrapper>
              Already have an account?&nbsp;
              <Link to="/login">Login</Link>
            </LoginLinkWrapper>
          </StyledForm>
        )}
      </Formik>
    </FormWrapper>
  );
};
