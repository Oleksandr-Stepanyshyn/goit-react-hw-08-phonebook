import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export default function ContactsView() {
  return (
    <>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </>
  );
}
