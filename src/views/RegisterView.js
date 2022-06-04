import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useForm } from 'react-hook-form';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      PhoneBook
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function RegisterView() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(authOperations.register(data));
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <TextField
            error={errors.name?.type === 'required'}
            autoComplete="name"
            margin="normal"
            required
            fullWidth
            type="text"
            id="name"
            label="Name"
            autoFocus
            helperText={errors.name?.message}
            {...register('name', { required: 'Name is required' })}
          />

          <TextField
            error={
              errors.email?.type === 'pattern' ||
              errors.email?.type === 'required'
            }
            required
            margin="normal"
            fullWidth
            type="email"
            id="email"
            label="Email Address"
            autoComplete="email"
            helperText={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'Invalid email',
              },
            })}
          />

          <TextField
            error={
              errors.password?.type === 'required' ||
              errors.password?.type === 'minLength'
            }
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            helperText={errors.password?.message}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 7, message: 'Min length 7' },
            })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid
            container
            justifyContent="flex-end"
            sx={{
              '&:hover': {
                color: '#1976d2',
              },
            }}
          >
            <Grid item>
              <Link to="/login">Already have an account? Login</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
