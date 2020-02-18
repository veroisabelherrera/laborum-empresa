import React from 'react';
import { useMyContext } from '../../states/provider';

const BasicInfo = () => {
  const [myState, dispatch] = useMyContext();
  const onChange = (event) => {
    dispatch({
      type: 'ADD_INFORMATION',
      field: event.target.name,
      value: event.target.value,
    });
  };
  return (
    <div>
      <p>Información Básica</p>
      <label>Nombre de la Empresa</label>
      <input
        type="text"
        name="nameCompany"
        onChange={onChange}
      />

      <label>Razón Social</label>
      <input
        type="text"
        name="businessName"
        onChange={onChange}
      />
      <label>Dirección</label>
      <input
        type="text"
        name="address"
        onChange={onChange}
      />

      <label>Cuidad</label>
      <input
        type="text"
        name="city"
        onChange={onChange}
      />

      <label>País</label>
      <input
        type="text"
        name="country"
        onChange={onChange}
      />
      <hr/>
      <label>Google Analytics</label>
      <input
        type="text"
        name="googleAnalytics"
        onChange={onChange}
      />
      <button>Guardar</button>
    </div>

  );
};

export default BasicInfo;
