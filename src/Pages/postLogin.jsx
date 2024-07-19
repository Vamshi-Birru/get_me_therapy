import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CircularAnimation from './circle'
import SuccessAnimation from "./successAnimation"

function PostLogin() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let backgroundImage;
  if (value === 0) {
    backgroundImage = `url(/assets/h1.png)`;
  } else if (value === 1) {
    backgroundImage = `url(/assets/h2.png)`;
  } else if (value === 2) {
    backgroundImage = `url(/assets/h3.png)`;
  }

  return (
    <Container component="main" disableGutters>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
         
        }}
      >
        <Paper
          sx={{
            position: 'relative',
            color: '#fff',
            backgroundSize: '100% auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: backgroundImage,
            width: '386px',
            height: '100vh',
            overflow: 'hidden', 
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: '0',
             
              
              
              height: '492px',
              width: '390px',
              backgroundColor: '#FFFFFF',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '24px 24px 0 0',
              zIndex: 1, 
            }}
          >
            <SuccessAnimation/>
            <Typography component='h5' variant='h5' m='12px' sx={{fontWeight:'600', fontSize:'24px',color:'#101010'}}> Login Successful</Typography>
            <Button
              type="submit"
             fullWidth
              height='52px'
              variant="contained"
              sx={{  mb: '8px' , backgroundColor: '#FE8C00',
                "&:hover": {
            backgroundColor: '#FE8C00',
             // Maintain the same color on hover
          },
          textTransform: "none",
          borderRadius:'100px',
          padding:'16px'
               }}
            >
             <Typography varient='body' sx={{fontWeight:'600', fontSize:'14px', width:'150px',height:'20px'}}> Go to Tracking Screen</Typography>
            </Button>
            <Typography varient='body' sx={{fontWeight:'500',fontSize:'14px', color:'#878787'}}>Logout</Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default PostLogin;
