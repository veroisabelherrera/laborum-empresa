import React from 'react';
import db from '../../../firebase-config';
import { useMyContext } from '../../states/provider';

const DateRangeJob = () => {
  const [myState, dispatch] = useMyContext();

  const sendFirebase = () => {
    db.collection('newJobAnnouncement').add({
      jobName: myState.jobName,
      beginDate: myState.beginDate,
      rent: myState.rent,
      webSite: myState.webSite,
      region: myState.region,
      countryState: myState.countryState,
      city: myState.city,
      workDay: myState.workDay,
      inclusion: myState.inclusion,
      contractType: myState.contractType,
      benefits: myState.benefits,
      jobDescription: myState.jobDescription,
      profession: myState.profession,
      minExperience: myState.minExperience,
      toolManagement: myState.toolManagement,
      expectations: myState.expectations,
      question1: myState.question1,
      typeAnswer: myState.typeAnswer,
      startDate: myState.startDate,
      endDate: myState.endDate,
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
      <p>Plazo de Postulación</p>
      <label>Selecciona fecha de inicio</label>
      <input
        type="text"
        name="startDate"
        onChange={onChange}
      />
      <label>Selecciona fecha de finalización</label>
      <input
        type="text"
        name="endDate"
        onChange={onChange}
      />
      <button onClick={sendFirebase}>Guardar</button>
    </div>

  );
};

export default DateRangeJob;
