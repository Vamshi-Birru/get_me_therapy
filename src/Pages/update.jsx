import * as React from 'react';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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
          <Typography component="h1" variant="h1">
            Login to your account
          </Typography>
          <Typography component='p' >
Please sign in to your account
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant="h6" component="label" htmlFor="email" gutterBottom>
              Email Address
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              placeholder='Enter Email'
              autoFocus
            />
             <Typography variant="h6" component="label" htmlFor="password" gutterBottom>
              Password
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container justifyContent="flex-end">
              <Grid item >
                <Link href="#" variant="body2" sx={{ textDecoration: "none", color: "#FE8C00" }}>
                  Forgot password?
                </Link>
              </Grid>
              </Grid>
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor: '#FE8C00',
                "&:hover": {
            backgroundColor: '#FE8C00',
             // Maintain the same color on hover
          },
          textTransform: "none",
               }}
            >
              Sign In
            </Button>
            <Divider sx={{ my: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Or sign in with
            </Typography>
          </Divider>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}