import { AuthLinkLogin, AuthLinkRegister, AuthList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthList>
      <li>
        <AuthLinkLogin to="login">Log In</AuthLinkLogin>
      </li>
      <li>
        <AuthLinkRegister to="register">Registration</AuthLinkRegister>
      </li>
    </AuthList>
  );
};
