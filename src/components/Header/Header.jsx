import { AuthNav } from 'components/AuthNav/AuthNav';
import {
  BurgerButton,
  BurgerIcon,
  HeaderContainer,
  Link,
  LogoLink,
  NavList,
  Navigation,
} from './Header.styled';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useState } from 'react';
import { UserNav } from 'components/UserNav/UserNav';

export const Header = ({ ishomepage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isLoggedIn = true;

  return (
    <HeaderContainer ishomepage={ishomepage}>
      <LogoLink to="/" ishomepage={ishomepage}>
        PetLove
      </LogoLink>
      <Navigation>
        <NavList>
          <li>
            <Link to="news">News</Link>
          </li>
          <li>
            <Link to="notices">Find pet</Link>
          </li>
          <li>
            <Link to="friends">Our friends</Link>
          </li>
        </NavList>
      </Navigation>

      {isLoggedIn ? <UserNav /> : <AuthNav />}

      <BurgerButton type="button" onClick={openMobileMenu}>
        {ishomepage === 'true' ? (
          <BurgerIcon
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 16H28"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 8H28"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 24H28"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </BurgerIcon>
        ) : (
          <BurgerIcon
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 18H31.5"
              stroke="#262626"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 9H31.5"
              stroke="#262626"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 27H31.5"
              stroke="#262626"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </BurgerIcon>
        )}
      </BurgerButton>
      {isMobileMenuOpen && (
        <MobileMenu onClose={closeMobileMenu} ishomepage={ishomepage} />
      )}
    </HeaderContainer>
  );
};
