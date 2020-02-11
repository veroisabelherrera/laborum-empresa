import React, { useState } from 'react';
import db from '../../../firebase-config';

const AddjobForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [rent, setRent] = useState('');
  const [web, setWeb] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    db.collection('jobs')
      .add({
        title,
        date,
        rent,
        web,
      })
      .then(() => {
        setTitle('');
        setDate('');
        setRent('');
        setWeb('');
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>Acerca del Puesto</h4>
      <div>
        <label>Nombre del puesto</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      </div>
      <div>
        <label>Fecha de ingreso</label>
        <input type="text" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
      </div>
      <div> 
        <label>Pretension de renta</label>
        <input type="text" value={rent} onChange={(e) => setRent(e.currentTarget.value)} />
      </div>
      <div>
        <label>Sitio web de la empresa</label>
        <input type="text" value={web} onChange={(e) => setWeb(e.currentTarget.value)} />
        <button> Siguiente</button>
      </div>
    </form>
  );
};
export default AddjobForm;
