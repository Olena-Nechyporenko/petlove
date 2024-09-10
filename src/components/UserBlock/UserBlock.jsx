import {
  Container,
  ImgWrapper,
  Img,
  UploadPhotoButton,
  Title,
  InfoList,
  InfoItem,
} from './UserBlock.styled.jsx';
import img from '../../images/icon.jpg';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFullUserInfo,
  selectUserAvatar,
} from 'redux/userProfile/selectors.js';
import { setAvatar } from 'redux/userProfile/userProfileSlice.js';

export const UserBlock = () => {
  const userInfo = useSelector(selectFullUserInfo);
  const useAvatar = useSelector(selectUserAvatar);

  const dispatch = useDispatch();

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

  return (
    <Container>
      <ImgWrapper>
        <Img src={useAvatar || img} />
      </ImgWrapper>
      <UploadPhotoButton type="button" onClick={triggerFileInput}>
        Upload photo
      </UploadPhotoButton>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileChange}
      />
      <Title>My information</Title>
      <InfoList>
        <InfoItem>{userInfo.name}</InfoItem>
        <InfoItem>{userInfo.email}</InfoItem>
        <InfoItem>
          {userInfo.phone === '' ? '+380' : `${userInfo.phone}`}
        </InfoItem>
      </InfoList>
    </Container>
  );
};
