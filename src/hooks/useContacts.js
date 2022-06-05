import { toast } from 'react-toastify';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export const useContacts = () => {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetch());
  }, [dispatch]);

  const addContact = contact => {
    const { name } = contact;

    const currentName = name.toLowerCase();
    const matchName = contacts.some(
      ({ name }) => name.toLowerCase() === currentName
    );

    matchName
      ? toast.warn(`${name} is already in contacts`, {
          position: 'top-center',
          autoClose: 3000,
        })
      : dispatch(contactsOperations.add(contact));
  };

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase().trim();
    return (
      contacts?.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter)
      ) ?? []
    );
  }, [contacts, filter]);

  return { filter, setFilter, contacts, filteredContacts, addContact };
};
