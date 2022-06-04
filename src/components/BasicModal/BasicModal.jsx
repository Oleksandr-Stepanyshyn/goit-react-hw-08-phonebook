import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';

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
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    mobile: 300,
    tablet: 420,
  },
  bgcolor: 'background.paper',
  border: '2px solid #1976d2',
  borderRadius: 2,
  boxShadow: 24,
};

export default function BasicModal({ textBtn }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={handleOpen}
        variant="outlined"
        size="small"
        sx={{ mt: 2 }}
      >
        {textBtn}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          p: 0,
          m: 0,
        }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: 'center' }}
          >
            {textBtn}
          </Typography>
          <ContactsForm handleClose={handleClose} textBtn={textBtn} />
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

BasicModal.propTypes = {
  textBtn: PropTypes.string.isRequired,
};
