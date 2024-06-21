import { NoticesListItem } from 'components/NoticesListItem/NoticesListItem';
import { List } from './NoticesList.styled';
import img from '../../images/login-mob.jpg';

const notices = [
  {
    id: 1,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 2,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 3,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 4,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 5,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
  {
    id: 6,
    img: img,
    title: 'Found Red-Eared Slider',
    rating: 2,
    name: 'Shelly',
    birthday: '12.08.2019',
    sex: 'Unknown',
    species: 'Turtle',
    category: 'Found',
    descr: 'Found this turtle near the pond. Contact if yours.',
  },
];

export const NoticesList = () => {
  return (
    <List>
      {notices.map(notice => (
        <NoticesListItem key={notice.id} noticeInfo={notice} />
      ))}
    </List>
  );
};
