import * as Yup from 'yup';
import { useEffect } from 'react';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseIcon,
  Title,
  ImgWrapper,
  Img,
  StyledForm,
  InputAndButtonWrapp,
  InputUrl,
  ErrorWrapper,
  UploadPhotoButton,
  Input,
  SaveButton,
} from './EditUserModal.styled';
import img from '../../images/dog-info-box.png';
import { Formik, Form, ErrorMessage } from 'formik';

const regex = {
  urlRegex: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
  emailRegex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  phoneRegex: /^\+38\d{10}$/,
};

const validationSchema = Yup.object().shape({
  avatar: Yup.string().matches(regex.urlRegex, 'Invalid url format'),
  name: Yup.string().required('Name is a required field'),
  email: Yup.string()
    .matches(regex.emailRegex, 'Invalid email format')
    .required('Email is a required field'),
  phone: Yup.string()
    .matches(regex.phoneRegex, 'Invalid phone number format')
    .required('Password is a required field'),
});

export const EditUserModal = ({ onClose }) => {
  useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseIcon
            onClick={onClose}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#262626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </CloseIcon>
          <Title>Edit information</Title>
          <ImgWrapper>
            <Img src={img} alt="" />
          </ImgWrapper>

          <Formik
          //   initialValues={initialValues}
          //   validationSchema={validationSchema}
          //   onSubmit={submitForm}
          >
            <Form>
              <StyledForm>
                <InputAndButtonWrapp>
                  <label>
                    <InputUrl
                      type="url"
                      name="avatar"
                      value="https//sljbckhsvavcjavcgavdhag"
                    />
                    <ErrorWrapper>
                      <ErrorMessage name="avatar" />
                    </ErrorWrapper>
                  </label>

                  <UploadPhotoButton>
                    Upload photo
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                  <Input
                    type="text"
                    name="name"
                    placeholder={'Name'}
                    value={'Anna'}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="name" />
                  </ErrorWrapper>
                </label>
                <label>
                  <Input
                    type="email"
                    name="email"
                    placeholder={'Email'}
                    value={'anna@gmail.com'}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="email" />
                  </ErrorWrapper>
                </label>
                <label>
                  <Input
                    type="text"
                    name="phone"
                    placeholder={'Phone number'}
                    value={'+38097687564'}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="phone" />
                  </ErrorWrapper>
                </label>
              </StyledForm>
              <SaveButton type="submit">Save</SaveButton>
            </Form>
          </Formik>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
