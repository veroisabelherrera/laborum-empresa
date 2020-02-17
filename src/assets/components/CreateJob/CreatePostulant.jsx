import React, { useState } from 'react';
import db from '../../../firebase-config';


const AddPostulantForm = () => {
  const [profession, setProfession] = useState('');


  function addPostulant(e) {
    e.preventDefault();
    db.collection('jobs')
      .add({
        profession,
      })
      .then(() => {
        setProfession('');
      });
  }

  return (
    <form onSubmit={addPostulant}>
      <div className="aboutpostulant">
        <h4>Profesion</h4>
        <label>Nombre del puesto</label>
        <input type="text" value={profession} onChange={(e) => setProfession(e.currentTarget.value)} />
        <br />
        <br />
        <button> Siguiente</button>
      </div>
    </form>
  );
};
export default AddPostulantForm;
