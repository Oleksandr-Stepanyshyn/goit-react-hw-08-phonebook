import styled from 'styled-components';

export const Contacts = styled.div`
  margin-top: 16px;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    margin-top: 16px;
    width: 440px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 24px;
    width: 720px;
  }
`;

export const ContactHeader = styled.h3``;

export const List = styled.ul`
  height: 80vh;
  margin-top: 12px;
  overflow-y: scroll;
`;

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  padding-left: 12px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.05);

  & + & {
    margin-top: 8px;
  }
`;
