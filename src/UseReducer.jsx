import React from 'react';

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const SECURITY_CODE = 'paradise';

const reducerObject = (state, payload) => ({
  'ERROR': { ...state, error: true, loading: false },
  'CHECK': { ...state, loading: true },
  'CONFIRM': { ...state, error: false, loading: false, confirmed: true },
  'WRITE': { ...state, value: payload },
  'DELETE': { ...state, deleted: true },
  'RESET': { ...state, confirmed: false, deleted: false, value: '' },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          dispatch({ type: 'CONFIRM' });
        } else {
          dispatch({ type: 'ERROR' });
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>¿Seguro que quieres eliminar?</p>
        <button
          onClick={() => dispatch({ type: 'DELETE' })}
        >Sí, eliminar</button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
        >No, cancelar</button>
      </React.Fragment>
    );
  } else if (state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
        >Recuperar</button>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>

        {(state.error && !state.loading) && (
          <p>Error: el código es incorrecto</p>
        )}

        {state.loading && (
          <p>Cargando...</p>
        )}

        <input 
          placeholder="Código de seguridad" 
          value={state.value}
          onChange={(event) => dispatch({ type: 'WRITE', payload: event.target.value })}
        />
        <button onClick={() => dispatch({ type: 'CHECK' })}>Comprobar</button>
      </div>
    );
  }
}

export { UseReducer };
