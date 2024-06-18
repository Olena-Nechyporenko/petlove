import { NewsListItem } from 'components/NewsListItem/NewsListItem';
import { List } from './NewList.styled';
import img from '../../images/register-desk.jpg';

const news = [
  {
    id: 1,
    img: img,
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    descr:
      'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. ',
    date: '15/03/2023',
  },
  {
    id: 2,
    img: img,
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    descr:
      'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. ',
    date: '15/03/2023',
  },
  {
    id: 3,
    img: img,
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    descr:
      'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. ',
    date: '15/03/2023',
  },
  {
    id: 4,
    img: img,
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    descr:
      'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. ',
    date: '15/03/2023',
  },
  {
    id: 5,
    img: img,
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    descr:
      'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. ',
    date: '15/03/2023',
  },
  {
    id: 6,
    img: img,
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    descr:
      'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. ',
    date: '15/03/2023',
  },
  {
    id: 7,
    img: img,
    title: 'When Helpless Fish Need a Hero, She Answers the Call',
    descr:
      'Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue. ',
    date: '15/03/2023',
  },
];

export const NewsList = () => {
  return (
    <List>
      {news.map(newInfo => (
        <NewsListItem key={newInfo.id} newInfo={newInfo} />
      ))}
    </List>
  );
};
