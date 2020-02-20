import React from 'react';
import './FilterBar.css';
import FlechaAbajo from '../../img/flechaAbajo.png';

export default () => (
  <div className="col-8 filter-bar-box">
    <div className="col-8 filter-bar">
      <section className="container-title col-6">
        Gestión de Aviso
      </section>

      <div>
        <button type="button" className="btn-new-aviso">
          Crear Nuevo Aviso
        </button>
      </div>

    </div>

    <div className="col-8 filter-bar">
      <div className="content-select">
        <select>
          <option>Aprobado</option>
          <option>Pendiente</option>
          <option>No Publicado</option>
          <option>Suspendido</option>
          <option>Rechazado</option>
        </select>
        <i />
      </div>
    </div>
  </div>
);
