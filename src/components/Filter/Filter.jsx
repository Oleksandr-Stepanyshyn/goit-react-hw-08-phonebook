import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

export const Filter = ({ filter, setFilter }) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      type="text"
      label="Search name"
      value={filter}
      onChange={e => setFilter(e.target.value)}
      sx={{ m: 0, p: 0, borderRadius: 10 }}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
