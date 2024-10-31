import * as Yup from 'yup';
import { useEffect } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { editUserInfo, getFullUserInfo } from 'redux/userProfile/operations';
import { setAvatar } from 'redux/userProfile/userProfileSlice';
import { selectFullUserInfo, selectUserAvatar } from 'redux/userProfile/selectors';
import {
  BackDrop,
  Modal,
  ModalContainer,
  CloseButton,
  CloseIcon,
  Title,
  ImgWrapper,
  Img,
  StyledForm,
  InputAndButtonWrapp,
  UploadPhotoButton,
  UploadPhotoIcon,
  InputLabel,
  Input,
  SaveButton,
  ErrorWrapper,
} from './EditUserModal.styled';
import img from '../../../images/user-default-profile-image.jpg';

const regex = {
  urlRegex: /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
  emailRegex: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  phoneRegex: /^\+38\d{10}$/,
};

const validationSchema = Yup.object().shape({
  avatar: Yup.string().matches(regex.urlRegex, 'Invalid url format'),
  name: Yup.string().required('Name is a required field'),
  email: Yup.string().matches(regex.emailRegex, 'Invalid email format').required('Email is a required field'),
  phone: Yup.string().matches(regex.phoneRegex, 'Invalid phone number format').required('Phone is a required field'),
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

  const handleSubmit = async values => {
    const userData = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      avatar:
        'https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331258_1280.pnghttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    };

    await dispatch(editUserInfo(userData));
    await dispatch(getFullUserInfo());
    onClose();
  };

  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
          <Title>Edit information</Title>
          <ImgWrapper>
            <Img src={userAvatar || img} alt="User avatar" />
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
                    <UploadPhotoIcon />
                  </UploadPhotoButton>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </InputAndButtonWrapp>
                <InputLabel>
                  <Input type="text" name="name" placeholder={'Name'} hasError={errors.name && touched.name} />
                  <ErrorWrapper>
                    <ErrorMessage name="name" />
                  </ErrorWrapper>
                </InputLabel>
                <InputLabel>
                  <Input type="email" name="email" placeholder={'Email'} hasError={errors.email && touched.email} />
                  <ErrorWrapper>
                    <ErrorMessage name="email" />
                  </ErrorWrapper>
                </InputLabel>
                <InputLabel>
                  <Input
                    type="text"
                    name="phone"
                    placeholder={'+380XXXXXXXXX'}
                    hasError={errors.phone && touched.phone}
                  />
                  <ErrorWrapper>
                    <ErrorMessage name="phone" />
                  </ErrorWrapper>
                </InputLabel>
                <SaveButton type="submit">Save</SaveButton>
              </StyledForm>
            )}
          </Formik>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};
