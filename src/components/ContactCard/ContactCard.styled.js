import styled from 'styled-components';
import { MdDelete } from 'react-icons/md';

export const Contact = styled.a`
  text-align: start;
  font-weight: 600;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
`;
export const Name = styled.h4`
  /* color: #1976d2; */
`;

export const Phone = styled.p`
  color: #1976d2;
  font-weight: 500;
  margin-top: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 12px;
  }
`;

export const Button = styled.button`
  color: inherit;
  cursor: pointer;
  border: 0;
  background-color: transparent;

  &:hover,
  &:focus {
    color: #1976d2;
    transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
`;

export const DeleteIcon = styled(MdDelete)`
  color: inherit;
  width: 24px;
  height: 24px;
`;
