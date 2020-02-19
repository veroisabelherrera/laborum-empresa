import React from 'react';
import { useMyContext } from '../../states/provider';

const ContactInfo = () => {
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
      <p>Información de Contacto</p>
      <label>Correo de Registro</label>
      <input
        type="text"
        name="registerMail"
        onChange={onChange}
      />

      <label>Correo de Contacto (Opcional)</label>
      <input
        type="text"
        name="optionalMail"
        onChange={onChange}
      />
      <label>Teléfono</label>
      <input
        type="text"
        name="phoneNumber"
        onChange={onChange}
      />

      <label>Teléfono Adicional (Opcional)</label>
      <input
        type="text"
        name="optionalPhoneNumber"
        onChange={onChange}
      />

      <label>Página web</label>
      <input
        type="text"
        name="webPage"
        onChange={onChange}
      />
      <hr/>
      <label>Facebook (Opcional)</label>
      <input
        type="text"
        name="facebook"
        onChange={onChange}
      />
      <label>LinkedIn (Opcional)</label>
      <input
        type="text"
        name="linkedin"
        onChange={onChange}
      />
      <label>Youtube (Opcional)</label>
      <input
        type="text"
        name="youtube"
        onChange={onChange}
      />
      <label>Twitter (Opcional)</label>
      <input
        type="text"
        name="twitter"
        onChange={onChange}
      />
      <button>Guardar</button>
    </div>

  );
};

export default ContactInfo;
