import styled from 'styled-components';

export const Header = styled.header`
  font-size: 20px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const HeaderContainer = styled.header`
  padding: 20px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
