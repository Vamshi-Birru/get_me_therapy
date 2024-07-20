import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const GoogleSignInButton = () => {
    const navigate=useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
     navigate("/postLogin");
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  return (
    <Button
      onClick={() => login()}
      fullWidth
                  variant="contained"
                  disableElevation
                  
                  sx={{
                    backgroundColor: 'white',
                    "&:hover": { backgroundColor: 'white' },
                    padding: '8px',
                    minWidth: 'auto',
                  }}
    >
      <img
        src="https://developers.google.com/identity/images/g-logo.png"
        alt="Google logo"
        style={{ width: '40px', height: '40px' }}
      />
    </Button>
  );
};

export default GoogleSignInButton;