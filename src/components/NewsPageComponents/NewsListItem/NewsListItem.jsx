import { format } from 'date-fns';
import { ImgWrapper, Item } from './NewsListItem.styled';
import { Img, NewTitle, Description, DateWrapper, Date, ReadMoreLink } from './NewsListItem.styled';

export const NewsListItem = ({ newInfo }) => {
  const { imgUrl, title, text, date, url } = newInfo;

  return (
    <Item>
      <ImgWrapper>
        <Img src={imgUrl} alt={''} />
      </ImgWrapper>
      <NewTitle text={title} length={60} />
      <Description text={text} length={160} />
      <DateWrapper>
        <Date>{format(date, 'dd/MM/yyyy')}</Date>
        <ReadMoreLink href={url} target="_black" rel="noopener noreferrer">
          Read more
        </ReadMoreLink>
      </DateWrapper>
    </Item>
  );
};
