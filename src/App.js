import React from 'react';
import { useUser } from 'reactfire';
import './App.css';
import Login from './assets/components/login/Login';
//import AddJobForm from './assets/components/CreateJob/CreateJob.jsx';


function App() {
  const user = useUser();

  return (
    <div className="App">
      {user && <p>Bienvenidx: {user.email} </p>}
      <Login />
    </div>
  );
}

export default App;
