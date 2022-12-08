import {Routes ,Route } from 'react-router-dom';
import './App.css';
import SignUp from './components/signUp/SignUp';
import Welcome from './pages/welcome/Welcome';

function App() {
  return (
      <Routes>
        <Route path='' 
          element={<Welcome />} />
        <Route path='sign-up' 
          element={<SignUp />} />
      </Routes>
  );
}

export default App;
