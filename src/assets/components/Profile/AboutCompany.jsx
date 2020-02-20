import React from 'react';
import db from '../../../firebase-config';
import { useMyContext } from '../../states/provider';

function AboutCompany() {
  const [myState, dispatch] = useMyContext();


  const sendFirebase = () => {
    db.collection('profileCompany').add({
      nameCompany: myState.nameCompany,
      businessName: myState.businessName,
      address: myState.address,
      country: myState.country,
      city: myState.city,
      googleAnalytics: myState.googleAnalytics,
      registerMail: myState.registerMail,
      optionalMail: myState.optionalMail,
      phoneNumber: myState.phoneNumber,
      optionalPhoneNumber: myState.optionalPhoneNumber,
      webPage: myState.webPage,
      facebook: myState.facebook,
      linkedin: myState.linkedin,
      youtube: myState.youtube,
      twitter: myState.twitter,
      companyDescription: myState.companyDescription,
      companyArea: myState.companyArea,
      interestAreas: myState.interestAreas,
      workDescription: myState.workDescription,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        // dispatch({
        //   type: 'ADD_WORKEXPERIENCE',
        //   payload: docRef.id,
        // });
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div>
      <p>Acerca de tu Empresa</p>
      <label>Ingresa una breve descripción de la Empresa</label>
      <input
        type="text"
        name="companyDescription"
        onChange={onChange}
      />

      <label>¿Cuál es el rubro?</label>
      <input
        type="text"
        name="companyArea"
        onChange={onChange}
      />
      <label>Áreas de Interés (Añadir hasta 10)</label>
      <input
        type="text"
        name="interestAreas"
        placeholder="Separa tus áreas de interés con una coma."
        onChange={onChange}
      />
      <button onClick={sendFirebase}>Guardar</button>
    </div>

  );
}

export default AboutCompany;
