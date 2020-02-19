import React from 'react';
import Login from './Login';
import './Login.css';
import logoae from '../../img/logo-ae.png';
import Select from './Login-RightScreen';

function LoginScreen() {
  return (
    <div className="login-screen">
      <div className="login-box-left">
        <img src={logoae} className="login-logo" alt="0" />
        <h1 className="login-h1">Encuentra a tu equipo ideal</h1>
        <Login />
        <div className="section-7">
          <h6 className="h6">
            ¿No tienes cuenta?
            <a className="link-login">Regístrate</a>
          </h6>
        </div>
      </div>
      <div className="login-box-right">
        <Select />
      </div>
    </div>
  );
}

export default LoginScreen;
