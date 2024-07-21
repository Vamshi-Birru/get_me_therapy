import * as React from 'react';
import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleSignInButton from './googleSignInButton';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const data = new FormData(event.currentTarget);
      const email=data.get('email');
      const password=data.get('password');;
      console.log({
        email: email,
        password: password,
      });
      const res= await axios.post(`https://get-me-therapy-api.onrender.com/login`,{email:email,password:password});
      Cookies.set('token',res.data.token);
      toast.success('Login successful!');
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
          
          <Typography component="h4" variant="h4" sx={{color:'#101010',fontWeight:'600', fontSize:'32px'}}>
            Login to your account
          </Typography>
          <Typography component='p' sx={{color:'#878787',fontSize:'14px'}} >
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
          <GoogleSignInButton />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
            <Typography variant="body2" sx={{ fontSize: '14px', color: '#878787' }}>
                Don't have an account?
            </Typography>
            <Button
                onClick={() => navigate("/register")}
                variant="text"
                sx={{
                    color: '#FE8C00',
                    ml: 1,
                    textTransform: 'none', // Optional: remove uppercase text transformation
                    fontSize: '14px', // Match the font size of the Typography
                }}
            >
               Register
            </Button>
        </Box>
          </Box>
        </Box>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
}