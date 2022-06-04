import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Logo, Navigate, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Navigate>
      <NavigationLink to="/">
        <Logo />
      </NavigationLink>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="contacts">Contacts</NavigationLink>}
    </Navigate>
  );
};
