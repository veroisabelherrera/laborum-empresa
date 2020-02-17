import React, { useState } from 'react';
import db from '../../../firebase-config';

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
    <form onSubmit={addJob}>
      <div className="aboutjob">
        <h4>Acerca del Puesto</h4>
        <label>Nombre del puesto</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
        <br />
        <label>Fecha de ingreso</label>
        <input type="text" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
        <br />
        <label>Pretension de renta</label>
        <input type="text" value={rent} onChange={(e) => setRent(e.currentTarget.value)} />
        <br />
        <label>Sitio web de la empresa</label>
        <input type="text" value={web} onChange={(e) => setWeb(e.currentTarget.value)} />
        <br />
      </div>
      <div className=" characteristicsjob">
        <h4>Caracteristicas del puesto</h4>
        <label>Jornada</label>
        <input type="text" value={workday} onChange={(e) => setworkday(e.currentTarget.value)} />
        <br />
        <label>Inclusion</label>
        <input type="text" value={inclusion} onChange={(e) => setinclusion(e.currentTarget.value)} />
        <br />
        <label>Tipo de contrato</label>
        <input type="text" value={contracType} onChange={(e) => setcontractType(e.currentTarget.value)} />
        <br />
        <label>Beneficios asociados</label>
        <input type="text" value={benefits} onChange={(e) => setBenefits(e.currentTarget.value)} />
        <br />
        <div className="directionJob">
          <h4>Direccion de empleo</h4>
          <label>region</label>
          <input type="text" value={region} onChange={(e) => setRegion(e.currentTarget.value)} />
          <br />
          <label>Ciudad</label>
          <input type="text" value={city} onChange={(e) => setCity(e.currentTarget.value)} />
          <br />
          <label>Comuna</label>
          <input type="text" value={comuna} onChange={(e) => setComuna(e.currentTarget.value)} />
          <br />
          <div className="jobdescription">
            <h4>Descripcion del empleo</h4>
            <label>Explica en que consiste el empleo</label>
            <input type="text" value={description} onChange={(e) => setDescription(e.currentTarget.value)} />
            <br />
            <button> Siguiente</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddjobForm;
