import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/home";
import Login from './Pages/login';
import Register from './Pages/register';
import PostLogin from './Pages/postLogin';
import NotFound from './Pages/notFound';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TrackingScreen from './Pages/trackingScreen';
import SharedTrackingScreen from './Pages/sharedTrackingScreen';






function App() {
  return (
   
    <Router>
      <div>
        <Routes>
          <Route  exact path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path='/postLogin' element={<PostLogin/>}/>
          <Route path='trackingScreen' element={<TrackingScreen/>}/>
          <Route path='sharedTrackingScreen' element={<SharedTrackingScreen/>}/>
          
          <Route element={<NotFound/>} />
          </Routes>
      </div>
    </Router>
   
  );
}

export default App;
