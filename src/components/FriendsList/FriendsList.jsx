import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import { List } from './FriendsList.styled';
import img from '../../images/cat-info-box.png';

const friends = [
  {
    id: 1,
    img: img,
    name: 'LKP “Lion”',
    email: 'Ikplev@gmail.com',
    address: 'Promuslova hgvj Street,56',
    phone: '(032) 293-30-41',
    time: '08:00 - 19:00',
  },
  {
    id: 2,
    img: img,
    name: 'LKP “Lion”',
    email: 'Ikplev@gmail.com',
    address: 'Promuslova Street,56',
    phone: '(032) 293-30-41',
    time: 'Day and night',
  },
  {
    id: 3,
    img: img,
    name: 'LKP “Lion”',
    email: 'Ikplev@gmail.com',
    address: 'Promuslova Street,56',
    phone: '(032) 293-30-41',
    time: '08:00 - 19:00',
  },
  {
    id: 4,
    img: img,
    name: 'LKP “Lion”',
    email: 'Ikplev@gmail.com',
    address: 'Promuslova Street,56',
    phone: '(032) 293-30-41',
    time: '08:00 - 19:00',
  },
  {
    id: 5,
    img: img,
    name: 'LKP “Lion”',
    email: 'Ikplev@gmail.com',
    address: 'Promuslova Street,56',
    phone: '(032) 293-30-41',
    time: '08:00 - 19:00',
  },
  {
    id: 6,
    img: img,
    name: 'LKP “Lion”',
    email: 'Ikplev@gmail.com',
    address: 'Promuslova gbigi Street,56',
    phone: '(032) 293-30-41',
    time: '08:00 - 19:00',
  },
];
export const FriendsList = () => {
  return (
    <List>
      {friends.map(friend => (
        <FriendsListItem key={friend.id} friendInfo={friend} />
      ))}
    </List>
  );
};
