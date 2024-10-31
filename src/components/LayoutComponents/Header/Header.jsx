import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/LayoutComponents/AuthNav/AuthNav';
import { UserNav } from 'components/LayoutComponents/UserNav/UserNav';
import { MobileMenu } from 'components/LayoutComponents/MobileMenu/MobileMenu';
import {
  BurgerButton,
  BurgerIcon,
  HeaderContainer,
  Link,
  LogoLink,
  IconWrapper,
  WhiteHeartIcon,
  AccentHeartIcon,
  NavList,
  Navigation,
} from './Header.styled';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isLoggedIn } = useAuth();

  const path = useLocation();
  const ishomepage = (path.pathname === '/').toString();

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer ishomepage={ishomepage}>
      <LogoLink to="/" ishomepage={ishomepage}>
        petl
        {ishomepage === 'true' ? (
          <IconWrapper>
            <WhiteHeartIcon />{' '}
          </IconWrapper>
        ) : (
          <IconWrapper>
            <AccentHeartIcon />
          </IconWrapper>
        )}
        ve
      </LogoLink>
      <Navigation>
        <NavList>
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
        </NavList>
      </Navigation>

      {isLoggedIn ? <UserNav /> : <AuthNav />}

      <BurgerButton type="button" onClick={openMobileMenu} ishomepage={ishomepage}>
        <BurgerIcon />
      </BurgerButton>
      {isMobileMenuOpen && <MobileMenu onClose={closeMobileMenu} ishomepage={ishomepage} />}
    </HeaderContainer>
  );
};
