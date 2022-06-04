import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import Button from '@mui/material/Button';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Text, User } from './UserMenu.styled';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <User>
      <AccountCircle sx={{ color: '#1976d2' }} />
      <Text>{userName}</Text>
      <Button
        variant="outlined"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </User>
  );
};
