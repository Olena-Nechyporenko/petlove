import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { UserNavWrapper, LogOutBtn, UserBar, LinkToProfile, UserName } from './UserNav.styled';

export const UserNav = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const path = useLocation();
  const ishomepage = (path.pathname === '/').toString();

  return (
    <UserNavWrapper>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())} ishomepage={ishomepage}>
        Log out
      </LogOutBtn>
      <UserBar>
        <LinkToProfile to="/profile" />
        <UserName ishomepage={ishomepage}>{user?.name}</UserName>
      </UserBar>
    </UserNavWrapper>
  );
};
