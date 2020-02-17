import React from 'react';
import './App.css';
import LoginScreen from './assets/components/login/LoginScreen';
import Home from './assets/views/Home';
import { useUser } from 'reactfire';

function App() {
  const user = useUser();

  return (
    <div className="App">
      { !user && <LoginScreen /> }

      { user && <Home /> }
    </div>
  );
}

export default App;
