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

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <LogoLink to="/">PetLove</LogoLink>
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
      <AuthNav />
      <BurgerButton type="button" onClick={openMobileMenu}>
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
      </BurgerButton>
      {isMobileMenuOpen && <MobileMenu onClose={closeMobileMenu} />}
    </HeaderContainer>
  );
};
