import React from 'react';
import { useUser } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import LoginScreen from './assets/components/login/LoginScreen';
import Home from './assets/views/Home';
import AddjobForm from './assets/components/CreateJob/CreateJob';
import ManageAd from './assets/components/gestionAvisos/Avisos';

function App() {
  const user = useUser();

  return (
    <div className="App">
      <BrowserRouter>
        { !user && <LoginScreen /> }
        { user && <Home /> }
        <Switch>
          <Route exact path="/crear-aviso" component={AddjobForm} />
        </Switch>
        <Switch>
          <Route exact path="/gestion-avisos" component={ManageAd} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
