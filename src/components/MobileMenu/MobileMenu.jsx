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
} from './MobileMenu.styled';

export const MobileMenu = ({ onClose }) => {
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
      <Menu>
        <Container>
          <CloseButton type="button" onClick={closeMobileMenu}>
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
          </CloseButton>
          <Nav>
            <MobileNavList>
              <li>
                <Link to="news">News</Link>
              </li>
              <li>
                <Link to="notices">Find pet</Link>
              </li>
              <li>
                <Link to="friends">Our friends</Link>
              </li>
            </MobileNavList>
          </Nav>
          <AuthList>
            <AuthItem>
              <AuthLinkLogin to="login">Log In</AuthLinkLogin>
            </AuthItem>
            <AuthItem>
              <AuthLinkRegister to="register">Registration</AuthLinkRegister>
            </AuthItem>
          </AuthList>
        </Container>
      </Menu>
    </BackDrop>
  );
};
