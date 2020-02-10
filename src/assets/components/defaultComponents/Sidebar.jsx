import React from 'react';
import StarIcon from '../../img/starVector.svg';

import '../../../App.css';
import './Sidebar.css';

function Sidebar() {
  return (
    <React.Fragment>
      <div className="logo">
        <p>Logo</p>
      </div>
      <div className="sidebar">
        <nav>
          <button type="button" className="btn-second-little">
            Crea un Nuevo Aviso
          </button>
          <ul>
            <li>
              <a>Inicio</a>
            </li>
            <li>
              <a>Perfil</a>
            </li>
            <li>
              <a>Gestión de Avisos</a>
            </li>
            <li>
              <a>Vinculación de Empresas</a>
            </li>
            <li>
              <a>Postulantes</a>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
