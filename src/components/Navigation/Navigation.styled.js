import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaAddressBook } from 'react-icons/fa';

export const Logo = styled(FaAddressBook)`
  color: #1976d2;
  width: 30px;
  height: 30px;
`;

export const Navigate = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
  font-size: 20px;

  &.active {
    color: #1976d2;
  }

  & + & {
    margin-left: 12px;
  }
`;
