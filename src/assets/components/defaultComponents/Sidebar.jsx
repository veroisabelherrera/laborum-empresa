import React from 'react';
import starIcon from '../../img/starVector.svg';

import '../../../App.css';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar col-3">
      <div>
        <button type="button" className="btn-second-little">Crea un Nuevo Aviso</button>
      </div>
      <nav>
        <ul>
          <li>
            <a>
              <img src={starIcon} alt="star" />
              Inicio
            </a>
          </li>
          <li>
            <a>
              <img src={starIcon} alt="star" />
              Perfil
            </a>
          </li>
          <li>
            <a>
              <img src={starIcon} alt="star" />
              Gestión de Avisos
            </a>
          </li>
          <li>
            <a>
              <img src={starIcon} alt="star" />
              Vinculación de Empresas
            </a>
          </li>
          <li>
            <a>
              <img src={starIcon} alt="star" />
              Postulantes
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
