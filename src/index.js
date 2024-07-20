import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import config from './config'; // Import the default export

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={config.Google_Client_Id}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GoogleOAuthProvider>
);

