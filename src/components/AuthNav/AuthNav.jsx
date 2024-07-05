import { useLocation } from 'react-router-dom';
import { AuthLinkLogin, AuthLinkRegister, AuthList } from './AuthNav.styled';

export const AuthNav = () => {
  const path = useLocation();
  const ishomepage = (path.pathname === '/').toString();

  return (
    <AuthList ishomepage={ishomepage}>
      <li>
        <AuthLinkLogin to="login" ishomepage={ishomepage}>
          Log In
        </AuthLinkLogin>
      </li>
      <li>
        <AuthLinkRegister to="register" ishomepage={ishomepage}>
          Registration
        </AuthLinkRegister>
      </li>
    </AuthList>
  );
};
