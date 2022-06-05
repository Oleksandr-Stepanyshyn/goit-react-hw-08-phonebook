import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContacts } from 'hooks/useContacts';

const validateValue = {
  name: {
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    message:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
  },
  number: {
    pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
    message:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
  },
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(validateValue.name.pattern, {
      message: validateValue.name.message,
    })
    .required(),
  number: yup
    .string()
    .matches(validateValue.number.pattern, {
      message: validateValue.number.message,
    })
    .required(),
});

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      desktop: 1200,
    },
  },
});

const style = {
  width: {
    tablet: 320,
    desktop: 400,
  },
  height: 1,
  border: {
    tablet: '1px solid rgba(0,0,0,0.3)',
  },
  borderRadius: 2,
  m: {
    tablet: 2,
    desktop: 3,
  },
};

export const ContactsForm = ({ textBtn, handleClose }) => {
  const mobileScreen = window.screen.width < 768;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { addContact } = useContacts();

  const onSubmit = data => {
    addContact(data);

    reset();
    mobileScreen && handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="div" maxWidth="xs" sx={style}>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            error={errors.name?.type === 'matches'}
            margin="normal"
            required
            fullWidth
            type="text"
            label="Name"
            autoComplete="name"
            autoFocus
            helperText={errors.name?.message}
            {...register('name', {
              required: 'Name is required',
            })}
          />

          <TextField
            error={errors.number?.type === 'matches'}
            margin="normal"
            required
            fullWidth
            label="Phone number"
            type="text"
            autoComplete="current-number"
            helperText={errors.number?.message}
            {...register('number', { required: 'Number is required' })}
          />

          <Grid container justifyContent="center">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {textBtn}
            </Button>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

ContactsForm.propTypes = {
  textBtn: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
};
