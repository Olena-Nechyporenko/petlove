import { FriendsList } from 'components/FriendsList/FriendsList';
import { Title } from './FriendsPage.styled';

export default function FriendsPage() {
  return (
    <section>
      <Title>Our friends</Title>
      <FriendsList />
    </section>
  );
}
