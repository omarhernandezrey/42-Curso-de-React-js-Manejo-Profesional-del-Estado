import React from 'react';

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const reducer = (state, action) => {
  // Un reducer recibe el estado actual y una acción, y retorna el nuevo estado.
};

function UseReducer({ name }) {
  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>
      <input placeholder="Código de seguridad" />
      <button>Comprobar</button>
    </div>
  );
}

export { UseReducer };
