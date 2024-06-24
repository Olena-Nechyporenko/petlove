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

export const UserBlock = () => {
  return (
    <Container>
      <ImgWrapper>
        <Img src={img} />
      </ImgWrapper>
      <UploadPhotoButton>Upload photo</UploadPhotoButton>
      <Title>My information</Title>
      <InfoList>
        <InfoItem>Anna</InfoItem>
        <InfoItem>anna00@gmail.com|</InfoItem>
        <InfoItem>+380</InfoItem>
      </InfoList>
    </Container>
  );
};
