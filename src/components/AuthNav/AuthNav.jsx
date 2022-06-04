import { AuthNavigation, NavigationLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavigation>
      <NavigationLink to="register">Register</NavigationLink>
      <NavigationLink to="login">Login</NavigationLink>
    </AuthNavigation>
  );
};
