import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { Button, Contact, DeleteIcon, Name, Phone } from './ContactCard.styled';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getIsLoading);

  return (
    <>
      <Contact href={`tel: ${number}`}>
        <Name>{name}</Name>
        <Phone>{number}</Phone>
      </Contact>

      <Button
        type="button"
        disabled={isLoading}
        onClick={() => dispatch(contactsOperations.del(id))}
      >
        <DeleteIcon />
      </Button>
    </>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
