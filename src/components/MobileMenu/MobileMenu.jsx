import { useAuth } from 'hooks/useAuth';
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
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

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
          <CloseButton type="button" onClick={closeMobileMenu}>
            {ishomepage === 'true' ? (
              <CloseIcon
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="#262626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="#262626"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </CloseIcon>
            ) : (
              <CloseIcon
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 8L8 24"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 8L24 24"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </CloseIcon>
            )}
          </CloseButton>
          <Nav>
            <MobileNavList>
              <li>
                <Link to="news" ishomepage={ishomepage}>
                  News
                </Link>
              </li>
              <li>
                <Link to="notices" ishomepage={ishomepage}>
                  Find pet
                </Link>
              </li>
              <li>
                <Link to="friends" ishomepage={ishomepage}>
                  Our friends
                </Link>
              </li>
            </MobileNavList>
          </Nav>
          {isLoggedIn ? (
            <LogOutBtn
              type="button"
              onClick={() => dispatch(logOut())}
              ishomepage={ishomepage}
            >
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
