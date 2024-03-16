import { Button, Link } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Loginpage } from './components/Loginpage';
import { Registrationpage } from './components/Registerpage';
import { StateBasics } from './components/StateBasics';
import { Counter } from './components/Counter';
import { Statebasicseg } from './components/Statebasicseg';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Statebasicseg/> */}
      <StateBasics/> 
      {/* <Counter/> */}
      {/* <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/register" element={<Registrationpage />} />
      </Routes> */}
    </div>
  );
}

export default App;
