import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <span>Welcome, {userName}</span>
      <button onClick={() => dispatch(authOperations.logOut())}>Log Out</button>
    </div>
  );
};
