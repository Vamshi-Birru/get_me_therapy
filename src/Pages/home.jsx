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
function Home() {
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
              bottom: '36px',
             
              left: '50%',
              transform: 'translateX(-50%)',
              height: '400px',
              width: '311px',
              backgroundColor: '#FE8C00',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              borderRadius: '48px',
              zIndex: 1, 
            }}
          >
            <Typography component="h4" variant="h4" color="inherit" gutterBottom sx={{
              fontWeight: 600,
              fontSize: '32px'
            }}>
              We serve incomparable delicacies
            </Typography>
            <Typography variant="body1" color="inherit" paragraph sx={{
              fontSize: '14px',
              fontWeight: 400
            }}>
              All the best restaurants with their top menu waiting for you, they can't wait for your order!!
            </Typography>

            

            <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" sx={{ width: '80px',
                
                marginTop: '10px',
                backgroundColor: 'transparent',
                '& .MuiTabs-scroller': {
                  display: 'flex',
                  gap: '4px',
                },
                '& .MuiTab-root': {
                  minWidth: '24px',
                  padding: 0,
                  color: '#C2C2C2',
                  '&.Mui-selected': {
                    color: '#FFFFFF',
                  },
                },
            }}
            TabIndicatorProps={{ style: { display: 'none' } }}>
              <Tab icon={<HorizontalRuleRoundedIcon />} aria-label="phone" sx={{ width: '24px', height: '6px', marginRight:'4px' }} 
              />
              <Tab icon={<HorizontalRuleRoundedIcon />} aria-label="favorite" sx={{ width: '24px', height: '6px', marginRight:'4px'}}
              />
              <Tab icon={<HorizontalRuleRoundedIcon />} aria-label="person"sx={{ width: '24px', height: '6px',  }}
             />
            </Tabs>
           {value!==2&& <Grid container sx={{ position: 'absolute', bottom: 20, left: 0, right: 0, justifyContent: 'space-between', px: 3 }}>
            <Grid item>
            <Button variant="text" sx={{ fontWeight: 600, fontSize: '14px', color: '#FFFFFF' }} onClick={()=>navigate('/login')}>Skip</Button>
            </Grid>
            <Button variant="text" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, fontSize: '14px', color: '#FFFFFF' }} onClick={(e)=>handleChange(e,value+1)}>
                  Next
                  <EastIcon sx={{ width: '20px', height: '20px', marginLeft: '8px' }} />
                </Button>
          </Grid>}
       {value===2&& <Button onClick={()=>navigate("./login")}><CircularAnimation/></Button>}
          </Box>

         
          
        </Paper>
      </Box>
    </Container>
  );
}

export default Home;
