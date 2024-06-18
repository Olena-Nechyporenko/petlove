import { ImgWrapper, Item } from './NewsListItem.styled';
import { Img, NewTitle, Description, Date } from './NewsListItem.styled';

export const NewsListItem = ({ newInfo }) => {
  const { img, title, descr, date } = newInfo;
  return (
    <Item>
      <ImgWrapper>
        <Img src={img} alt={''} />
      </ImgWrapper>
      <NewTitle>{title}</NewTitle>
      <Description>{descr}</Description>
      <Date>{date}</Date>
    </Item>
  );
};
