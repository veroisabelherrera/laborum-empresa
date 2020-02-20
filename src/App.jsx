import React from 'react';
import { useUser } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ProviderContext } from './assets/states/provider';
import LoginScreen from './assets/components/login/LoginScreen';
import Home from './assets/views/Home';
// import AddjobForm from './assets/components/CreateJob/CreateJob';
// import CreateProfile from './assets/views/CreateProfile';
import './App.css';

function App() {
  const user = useUser();

  return (
    <div className="App">
      <ProviderContext>
        <BrowserRouter>
          {!user && <LoginScreen />}
          {user && <Home />}
          {/* <Switch>
          <Route exact path="/crear-aviso" component={AddjobForm} />
        </Switch> */}
          {/* <Switch>
          <Route exact path="/gestion-avisos" component={ManageAd} />
        </Switch> */}
        </BrowserRouter>
      </ProviderContext>
    </div>
  );
}

export default App;
