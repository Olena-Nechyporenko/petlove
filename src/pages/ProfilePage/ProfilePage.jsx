import { MyNotices } from 'components/ProfilePageComponents/MyNotices/MyNotices';
import { UserCard } from 'components/ProfilePageComponents/UserCard/UserCard';
import { ProfileMainWrapper } from './ProfilePage.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFullUserInfo } from 'redux/userProfile/operations';

export default function ProfilePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFullUserInfo());
  }, [dispatch]);

  return (
    <ProfileMainWrapper>
      <UserCard />
      <MyNotices />
    </ProfileMainWrapper>
  );
}
