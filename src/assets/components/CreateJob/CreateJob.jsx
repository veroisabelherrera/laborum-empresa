import React, { useState } from 'react';
import db from '../../../firebase-config';
import '../../../App.css';
import './CreateJob.css';


const AddjobForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [rent, setRent] = useState('');
  const [web, setWeb] = useState('');
  const [workday, setworkday] = useState('');
  const [inclusion, setinclusion] = useState('');
  const [contracType, setcontractType] = useState('');
  const [benefits, setBenefits] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [comuna, setComuna] = useState('');
  const [description, setDescription] = useState('');

  function addJob(e) {
    e.preventDefault();
    db.collection('jobs')
      .add({
        title,
        date,
        rent,
        web,
        workday,
        inclusion,
        contracType,
        benefits,
        region,
        city,
        comuna,
        description,
      })
      .then(() => {
        setTitle('');
        setDate('');
        setRent('');
        setWeb('');
        setworkday('');
        setinclusion('');
        setcontractType('');
        setBenefits('');
        setRegion('');
        setCity('');
        setComuna('');
        setDescription('');
      });
  }

  return (
    <form className="form-aviso" onSubmit={addJob}>
      <section className="first-section col-12">
        <div className="aboutjob col-6">
          <p className="title">Acerca del Puesto</p>
          <label className="field-description">Nombre del puesto</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Fecha de ingreso</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Pretensión de renta</label>
          <input
            type="text"
            value={rent}
            onChange={(e) => setRent(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Sitio web de la empresa</label>
          <input
            type="text"
            value={web}
            onChange={(e) => setWeb(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
        </div>
        <div className="characteristicsjob col-6">
          <p className="title">Características del puesto</p>
          <label className="field-description">Jornada</label>
          <input
            type="text"
            value={workday}
            onChange={(e) => setworkday(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Inclusión</label>
          <input
            type="text"
            value={inclusion}
            onChange={(e) => setinclusion(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Tipo de contrato</label>
          <input
            type="text"
            value={contracType}
            onChange={(e) => setcontractType(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Beneficios asociados</label>
          <input
            type="text"
            value={benefits}
            onChange={(e) => setBenefits(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
        </div>
      </section>
      <section className="first-section">
        <div className="directionJob col-6">
          <p className="title">Dirección de empleo</p>
          <label className="field-description">Región</label>
          <input
            type="text"
            value={region}
            onChange={(e) => setRegion(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Ciudad</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
          <label className="field-description">Comuna</label>
          <input
            type="text"
            value={comuna}
            onChange={(e) => setComuna(e.currentTarget.value)}
            className="input-field col-11"
          />
          <br />
        </div>
        <div className="jobdescription col-6">
          <p className="title"> Descripción del empleo</p>
          <label className="field-description">Explica en qué consiste el empleo</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            className="input-field-area col-11"
          />
        </div>
      </section>
      <br />
      <button> Siguiente</button>
    </form>
  );
};
export default AddjobForm;
