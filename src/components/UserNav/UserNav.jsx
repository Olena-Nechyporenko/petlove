import { useAuth } from 'hooks/useAuth';
import {
  UserNavWrapper,
  LogOutBtn,
  UserBar,
  LinkToProfile,
  UserName,
} from './UserNav.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useLocation } from 'react-router-dom';

export const UserNav = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const path = useLocation();
  const ishomepage = (path.pathname === '/').toString();

  return (
    <UserNavWrapper>
      <LogOutBtn
        type="button"
        onClick={() => dispatch(logOut())}
        ishomepage={ishomepage}
      >
        Log out
      </LogOutBtn>
      <UserBar>
        <LinkToProfile to="/profile" />
        <UserName ishomepage={ishomepage}>{user?.name}</UserName>
      </UserBar>
    </UserNavWrapper>
  );
};
