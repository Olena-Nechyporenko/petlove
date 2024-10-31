import {
  Item,
  ImgWrapper,
  Img,
  Time,
  Name,
  DescrInfoWrapper,
  DescrList,
  DescrItem,
  DescrInfo,
} from './FriendsListItem.styled';

export const FriendsListItem = ({ friendInfo }) => {
  const { imageUrl, url, title, email, address, addressUrl, phone } = friendInfo;

  return (
    <Item>
      <ImgWrapper href={url} target="_blank" rel="noopener noreferrer">
        <Img src={imageUrl} alt={''} />
      </ImgWrapper>
      <DescrInfoWrapper>
        <Time>9:00 - 18.00</Time>
        <Name>{title}</Name>
        <DescrList>
          <DescrItem>
            Email:
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
              <DescrInfo text={email || '-'} length={23} />
            </a>
          </DescrItem>
          <DescrItem>
            Address:
            <a href={addressUrl} target="_blank" rel="noopener noreferrer">
              <DescrInfo text={address || '-'} length={21} />
            </a>
          </DescrItem>
          <DescrItem>
            Phone:
            <a href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
              <DescrInfo text={phone || '-'} length={23} />
            </a>
          </DescrItem>
        </DescrList>
      </DescrInfoWrapper>
    </Item>
  );
};
