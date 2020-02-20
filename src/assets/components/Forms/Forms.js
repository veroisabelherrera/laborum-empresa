import React, { useState } from 'react';


const Form = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    db.collection('business')
      .add({
        title,
        date,
        address,
        city,
      })
      .then(() => {
        setTitle('');
        setDate('');
        setAddress('');
        setCity('');
      });
  }

  return (
    
    <form onSubmit={onSubmit}>
      <h4>Informacion basica</h4>
      <div>
        <label>Nombre del la Empresa</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      </div>
      <div>
        <label>Razon social</label>
        <input type="text" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
      </div>
      <div> 
        <label>Direccion</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.currentTarget.value)} />
      </div>
      <div>
        <label>Ciudad</label>
        <input type="text" value={city} onChange={(e) => setCity(e.currentTarget.value)} />
        <button> Guardar</button>
        <button> Siguiente</button>
      </div>
    </form>
  );
};

 export default Form;