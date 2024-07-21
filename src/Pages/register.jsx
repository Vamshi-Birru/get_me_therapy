import * as React from 'react';
import { Divider } from '@mui/material';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GoogleSignInButton from './googleSignInButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Cookies from 'js-cookie';
import axios from 'axios';
import BASE_URL from '../config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try{
      const data = new FormData(event.currentTarget);
      const email=data.get('email');
      const username=data.get('username');
      const password=data.get('password');
      console.log({
        email: email,
        username:username,
        password: password,
      });
      const res= await axios.post(`https://get-me-therapy-api.onrender.com/register`,{email:email,username:username,password:password});
      Cookies.set('token',res.data.token);
      toast.success('Register successful!');
      navigate("/postLogin");
    }
    catch(err){
      toast.error(err.response.data.message);
      console.log('Error: ',err);
    }
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
            width:'327px'
            
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h4" variant="h4" sx={{color:'#101010',fontWeight:'600', fontSize:'32px'}}>
            Create your new account
          </Typography>
          <Typography component='p' sx={{color:'#878787',fontSize:'14px'}} >
          Create an account to start looking for the food you like
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
            <Typography variant="h6" component="label" htmlFor="username" gutterBottom>
             User Name
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              name="username"
              autoComplete="username"
              placeholder='Enter Username'
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
           < Grid item xs={12}>
           <FormControlLabel
              control={
                <Checkbox
                  value="allowExtraEmails"
                  sx={{
                    color: '#FE8C00',
                    '&.Mui-checked': {
                      color: '#FE8C00',
                    },
                  }}
                />
              }
              label={
                <Typography>
                  I Agree with{' '}
                  <Link href="#" sx={{ color: '#FE8C00', textDecoration: 'none' }}>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="#" sx={{ color: '#FE8C00', textDecoration: 'none' }}>
                    Privacy Policy
                  </Link>
                </Typography>
              }
            />
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
              Register
            </Button>
            <Divider sx={{ my: 2 }}>
            <Typography variant="body2" color="textSecondary">
              Or sign in with
            </Typography>
          </Divider>
          <GoogleSignInButton/>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
            <Typography variant="body2" sx={{ fontSize: '14px', color: '#878787' }}>
                Have an account?
            </Typography>
            <Button
                onClick={() => navigate("/login")}
                variant="text"
                sx={{
                    color: '#FE8C00',
                    ml: 1,
                    textTransform: 'none', // Optional: remove uppercase text transformation
                    fontSize: '14px', // Match the font size of the Typography
                }}
            >
                Sign In
            </Button>
        </Box>
          </Box>
        </Box>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
}