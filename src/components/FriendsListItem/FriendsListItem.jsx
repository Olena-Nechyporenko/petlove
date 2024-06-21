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
  const { img, name, email, address, phone, time } = friendInfo;

  return (
    <Item>
      <ImgWrapper>
        <Img src={img} alt={''} />
      </ImgWrapper>
      <DescrInfoWrapper>
        <Time>{time}</Time>
        <Name>{name}</Name>
        <DescrList>
          <DescrItem>
            Email:
            <DescrInfo text={email} length={23} />
          </DescrItem>
          <DescrItem>
            Address:
            <DescrInfo text={address} length={21} />
          </DescrItem>
          <DescrItem>
            Phone:
            <DescrInfo text={phone} length={23} />
          </DescrItem>
        </DescrList>
      </DescrInfoWrapper>
    </Item>
  );
};
