import React from 'react';
import { useMyContext } from '../../states/provider';

const DateRangeJob = () => {
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
      <p>Escoge donde publicar</p>
      <label>Selecciona las bolsas en que publicarás</label>
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
      <button>Guardar</button>
    </div>

  );
};

export default DateRangeJob;
