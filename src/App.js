import React from 'react';
import { useUser } from 'reactfire';
import './App.css';
//import Login from './assets/components/login/Login';
import Sidebar from '../src/assets/components/defaultComponents/Sidebar'

function App() {
  const user = useUser();

  return (
    <div >
      {/* { user && <p>Bienvenidx: {user.email} </p> }
      <Login /> */}
      <Sidebar className="col-3"/>
      <div className="col-9">
       
      </div>
    </div>
  );
}

export default App;
