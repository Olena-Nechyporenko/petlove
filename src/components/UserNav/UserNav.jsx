import {
  UserNavWrapper,
  LogOutBtn,
  UserBar,
  LinkToProfile,
  UserName,
} from './UserNav.styled';

export const UserNav = () => {
  return (
    <UserNavWrapper>
      <LogOutBtn type="button">Log out</LogOutBtn>
      <UserBar>
        <LinkToProfile to="/profile" />
        <UserName>Anna</UserName>
      </UserBar>
    </UserNavWrapper>
  );
};
