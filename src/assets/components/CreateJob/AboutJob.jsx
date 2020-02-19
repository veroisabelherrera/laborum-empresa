import React from "react";
import { useMyContext } from "../../states/provider";
import "./CreateJob.css";

const BasicInfo = () => {
  const [myState, dispatch] = useMyContext();
  const onChange = event => {
    dispatch({
      type: "ADD_INFORMATION",
      field: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div className="col-12">
      <div className="first-section">
        <section className="col-6">
          <p className="title">Acerca del Puesto</p>
          <label className="field-description">Nombre del puesto</label>
          <input
            type="text"
            name="jobName"
            className="input-field col-11"
            onChange={onChange}
          />

          <label className="field-description">Fecha Integración</label>
          <input className="input-field col-11" type="text" name="beginDate" onChange={onChange} />
          <label className="field-description">Pretensión de renta</label>
          <input className="input-field col-11" type="text" name="rent" onChange={onChange} />

          <label className="field-description">Sitio web la empresa</label>
          <input className="input-field col-11" type="text" name="webSite" onChange={onChange} />
        </section>
        <section className="col-6">
          <p className="title">Características del Puesto</p>
          <label className="field-description">Jornada</label>
          <input className="input-field col-11" type="text" name="workDay" onChange={onChange} />
          <label className="field-description">Inclusión</label>
          <input className="input-field col-11" type="text" name="inclusion" onChange={onChange} />
          <label className="field-description">Tipo de Contrato</label>
          <input className="input-field col-11" type="text" name="contractType" onChange={onChange} />
          <label className="field-description">Beneficios Asociados</label>
          <input className="input-field col-11" type="text" name="benefits" onChange={onChange} />
        </section>
      </div>
      <div className="first-section">
        <section className="col-6">
          <p className="title">Dirección de empleo</p>
          <label className="field-description">Región</label>
          <input className="input-field col-11" type="text" name="region" onChange={onChange} />

          <label className="field-description">Cuidad</label>
          <input className="input-field col-11" type="text" name="city" onChange={onChange} />

          <label className="field-description">Comuna</label>
          <input className="input-field col-11" type="text" name="countryState" onChange={onChange} />
        </section>
        <section className="col-6">
          <p className="title">Descripción del Puesto</p>
          <label className="field-description">Explica en qué consiste el puesto</label>
          <input className="input-field-area col-11" type="text" name="jobDescription" onChange={onChange} />
        </section>
      </div>

      <hr className="separator"/>
      <section className="btn-section">
        <button className="btn-back">Atrás</button>
        <button className="btn-next">Siguiente</button>
      </section>
    </div>
  );
};

export default BasicInfo;
