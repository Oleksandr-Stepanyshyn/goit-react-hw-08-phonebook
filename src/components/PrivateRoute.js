import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export const PrivateRoute = ({ redirectTo = '/login', children }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export const PublicRoute = ({
  redirectTo = '/',
  children,
  restricted = false,
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
