import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import {
  CloseButton,
  CloseIcon,
  Container,
  Nav,
  Link,
  Menu,
  MobileNavList,
  AuthList,
  AuthItem,
  AuthLinkLogin,
  AuthLinkRegister,
  BackDrop,
  LogOutBtn,
} from './MobileMenu.styled';

export const MobileMenu = ({ onClose, ishomepage }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const closeMobileMenu = () => {
    onClose(false);
  };

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose(false);
    }
  };
  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Menu ishomepage={ishomepage}>
        <Container>
          <CloseButton type="button" onClick={closeMobileMenu} ishomepage={ishomepage}>
            <CloseIcon />
          </CloseButton>
          <Nav>
            <MobileNavList>
              <li>
                <Link to="news" ishomepage={ishomepage} onClick={() => onClose()}>
                  News
                </Link>
              </li>
              <li>
                <Link to="notices" ishomepage={ishomepage} onClick={() => onClose()}>
                  Find pet
                </Link>
              </li>
              <li>
                <Link to="friends" ishomepage={ishomepage} onClick={() => onClose()}>
                  Our friends
                </Link>
              </li>
            </MobileNavList>
          </Nav>
          {isLoggedIn ? (
            <LogOutBtn type="button" onClick={() => dispatch(logOut())} ishomepage={ishomepage}>
              Log out
            </LogOutBtn>
          ) : (
            <AuthList>
              <AuthItem>
                <AuthLinkLogin to="login" ishomepage={ishomepage}>
                  Log In
                </AuthLinkLogin>
              </AuthItem>
              <AuthItem>
                <AuthLinkRegister to="register">Registration</AuthLinkRegister>
              </AuthItem>
            </AuthList>
          )}
        </Container>
      </Menu>
    </BackDrop>
  );
};
