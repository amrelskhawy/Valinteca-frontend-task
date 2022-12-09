import {Routes ,Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/signUp/SignUp';
import Home from './pages/home/Home';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
      <Routes>
        <Route path='' 
          element={<Welcome />} />
        <Route path='sign-up' 
          element={<SignUp />} />
        <Route path='home'
          element={<Home />} />
      </Routes>
  );
}

export default App;
