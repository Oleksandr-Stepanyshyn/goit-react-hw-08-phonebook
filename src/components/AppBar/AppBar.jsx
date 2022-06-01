import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLooggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLooggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
