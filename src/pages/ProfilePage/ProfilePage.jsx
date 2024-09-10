import { MyNotices } from 'components/MyNotices/MyNotices';
import { UserCard } from 'components/UserCard/UserCard';
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
