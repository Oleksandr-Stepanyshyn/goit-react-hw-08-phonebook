import { LinkText, Title, LinkSpan } from 'components/Views.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function HomeView() {
  const isLooggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLooggedIn ? (
    <Title>
      Welcome to your personal phone book.
      <LinkText to="/contacts">Add your contacts</LinkText>
    </Title>
  ) : (
    <Title>
      Welcome to your personal phone book. Please{' '}
      <LinkSpan to="/register">register</LinkSpan> or{' '}
      <LinkSpan to="/login">login</LinkSpan>.
    </Title>
  );
}
