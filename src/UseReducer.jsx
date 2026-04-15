import React from 'react';

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// 1. Reducer con if/else
const reducerIf = (state, action) => {
  if (action.type === 'ERROR') {
    return { ...state, error: true, loading: false };
  } else if (action.type === 'CHECK') {
    return { ...state, loading: true };
  } else {
    return state;
  }
};

// 2. Reducer con switch
const reducerSwitch = (state, action) => {
  switch (action.type) {
    case 'ERROR':
      return { ...state, error: true, loading: false };
    case 'CHECK':
      return { ...state, loading: true };
    default:
      return state;
  }
};

// 3. Reducer con objetos (Pattern dictionary)
const reducerObject = (state) => ({
  'ERROR': { ...state, error: true, loading: false },
  'CHECK': { ...state, loading: true },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
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
