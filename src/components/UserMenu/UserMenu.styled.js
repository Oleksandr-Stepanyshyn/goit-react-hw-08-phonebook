import styled from 'styled-components';

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Text = styled.span`
  margin: 0 12px 0 4px;
  display: inline-flex;
  align-items: center;
`;
