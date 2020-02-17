import React from 'react';
import './App.css';
import Login from './assets/components/login/Login';
import AddJobForm from './assets/components/CreateJob/CreateJob.jsx';
import { useUser } from 'reactfire';



function App() {
  const user = useUser();

  return (
    <div className="App">
      {user && <p>Bienvenidx: {user.email} </p>}
      <Login />
      <AddJobForm />
    </div>
  );
}

export default App;
