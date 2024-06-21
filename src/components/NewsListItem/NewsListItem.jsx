import { ImgWrapper, Item } from './NewsListItem.styled';
import {
  Img,
  NewTitle,
  Description,
  DateWrapper,
  Date,
  ReadMoreLink,
} from './NewsListItem.styled';

export const NewsListItem = ({ newInfo }) => {
  const { img, title, descr, date } = newInfo;
  return (
    <Item>
      <ImgWrapper>
        <Img src={img} alt={''} />
      </ImgWrapper>
      <NewTitle>{title}</NewTitle>
      <Description text={descr} length={120} />
      <DateWrapper>
        <Date>{date}</Date>
        <ReadMoreLink
          href="https://www.figma.com/design/UjTY410OFPsHzC6vHqUGQY/Petl%F0%9F%92%9Bve-(Copy)?node-id=0-1&t=8rStaa7UyGUTm26l-0"
          target="_black"
          rel="noopener noreferrer"
        >
          Read more
        </ReadMoreLink>
      </DateWrapper>
    </Item>
  );
};
