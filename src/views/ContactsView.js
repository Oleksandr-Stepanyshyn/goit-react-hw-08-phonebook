import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import BasicModal from 'components/BasicModal/BasicModal';
import { ContactsContainer, Container, Main } from 'components/Views.styled';

export default function ContactsView() {
  const mobileScreen = window.screen.width < 768;

  return (
    <Main>
      <Container>
        <ContactsContainer>
          {mobileScreen ? (
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
