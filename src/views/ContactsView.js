import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import BasicModal from 'components/BasicModal/BasicModal';
import { ContactsContainer, Container, Main } from 'components/Views.styled';

export default function ContactsView() {
  const screenWidth = window.screen.width;

  return (
    <Main>
      <Container>
        <ContactsContainer>
          {screenWidth < 768 ? (
            <BasicModal textBtn={'Add contact'} />
          ) : (
            <ContactsForm textBtn={'Add contact'} />
          )}
          <ContactsList />
        </ContactsContainer>
      </Container>
    </Main>
  );
}
