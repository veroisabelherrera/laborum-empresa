import React from 'react';
import './App.css';
import { useUser } from 'reactfire';
import LoginScreen from './assets/components/login/LoginScreen';
import Home from './assets/views/Home';

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
