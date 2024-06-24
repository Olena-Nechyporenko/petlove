import { MyNotices } from 'components/MyNotices/MyNotices';
import { UserCard } from 'components/UserCard/UserCard';
import { ProfileMainWrapper } from './ProfilePage.styled';

export default function ProfilePage() {
  return (
    <ProfileMainWrapper>
      <UserCard />
      <MyNotices />
    </ProfileMainWrapper>
  );
}
