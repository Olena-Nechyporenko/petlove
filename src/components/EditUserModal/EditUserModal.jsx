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
  UploadPhotoButton,
  Input,
  SaveButton,
  ErrorWrapper,
} from './EditUserModal.styled';
import img from '../../images/icon.jpg';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFullUserInfo,
  selectUserAvatar,
} from 'redux/userProfile/selectors';
import { editUserInfo } from 'redux/userProfile/operations';
import { setAvatar } from 'redux/userProfile/userProfileSlice';

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
    .required('Phone is a required field'),
});

export const EditUserModal = ({ onClose }) => {
  const userInfo = useSelector(selectFullUserInfo);
  const userAvatar = useSelector(selectUserAvatar);

  const dispatch = useDispatch();

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

  const handleFileChange = async e => {
    const { type, files } = e.target;

    if (type === 'file') {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          dispatch(setAvatar(fileReader.result));
        }
      };
      if (files[0]) {
        fileReader.readAsDataURL(files[0]);
      }
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  const handleSubmit = values => {
    const userData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      avatar:
        'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331258_1280.pnghttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    };

    dispatch(editUserInfo(userData));
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
            <Img src={userAvatar || img} alt="" />
          </ImgWrapper>

          <Formik
            initialValues={{
              avatar: userInfo.avatar,
              name: userInfo.name,
              email: userInfo.email,
              phone: userInfo.phone,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <StyledForm>
                <InputAndButtonWrapp>
                  <UploadPhotoButton type="button" onClick={triggerFileInput}>
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
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </InputAndButtonWrapp>
                <label>
                  <Input
                    type="text"
                    name="name"
                    placeholder={'Name'}
                    hasError={errors.name && touched.name}
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
                    hasError={errors.email && touched.email}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="email" />
                  </ErrorWrapper>
                </label>
                <label>
                  <Input
                    type="text"
                    name="phone"
                    placeholder={'+380XXXXXXXXX'}
                    hasError={errors.phone && touched.phone}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="phone" />
                  </ErrorWrapper>
                </label>
                <SaveButton type="submit">Save</SaveButton>
              </StyledForm>
            )}
          </Formik>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
