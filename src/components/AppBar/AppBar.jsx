import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container } from 'components/Views.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Header, HeaderContainer } from './AppBar.styled';

export const AppBar = () => {
  const isLooggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      {' '}
      <Container>
        <HeaderContainer>
          <Navigation />
          {isLooggedIn ? <UserMenu /> : <AuthNav />}
        </HeaderContainer>
      </Container>
    </Header>
  );
};
