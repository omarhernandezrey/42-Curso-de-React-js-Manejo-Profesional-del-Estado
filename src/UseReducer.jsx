import React from 'react';

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

const SECURITY_CODE = 'paradise';

const actionTypes = {
  confirm: 'CONFIRM',
  error: 'ERROR',
  check: 'CHECK',
  write: 'WRITE',
  delete: 'DELETE',
  reset: 'RESET',
};

const onConfirm = () => ({ type: actionTypes.confirm });
const onError = () => ({ type: actionTypes.error });
const onCheck = () => ({ type: actionTypes.check });
const onWrite = (payload) => ({ type: actionTypes.write, payload });
const onDelete = () => ({ type: actionTypes.delete });
const onReset = () => ({ type: actionTypes.reset });

const reducerObject = (state, payload) => ({
  [actionTypes.error]: { ...state, error: true, loading: false },
  [actionTypes.check]: { ...state, loading: true },
  [actionTypes.confirm]: { ...state, error: false, loading: false, confirmed: true },
  [actionTypes.write]: { ...state, value: payload },
  [actionTypes.delete]: { ...state, deleted: true },
  [actionTypes.reset]: { ...state, confirmed: false, deleted: false, value: '' },
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

  // Estados derivados: se calculan a partir del estado actual en cada render.
  const isError = state.error && !state.loading;
  const isConfirmed = state.confirmed && !state.loading;
  const isDeleted = state.deleted && state.confirmed;

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          dispatch(onConfirm());
        } else {
          dispatch(onError());
        }
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && isConfirmed) {
    return (
      <React.Fragment>
        <p>¿Seguro que quieres eliminar?</p>
        <button
          onClick={() => dispatch(onDelete())}
        >Sí, eliminar</button>
        <button
          onClick={() => dispatch(onReset())}
        >No, cancelar</button>
      </React.Fragment>
    );
  } else if (isDeleted) {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
          onClick={() => dispatch(onReset())}
        >Recuperar</button>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>

        {isError && (
          <p>Error: el código es incorrecto</p>
        )}

        {state.loading && (
          <p>Cargando...</p>
        )}

        <input 
          placeholder="Código de seguridad" 
          value={state.value}
          onChange={(event) => dispatch(onWrite(event.target.value))}
        />
        <button onClick={() => dispatch(onCheck())}>Comprobar</button>
      </div>
    );
  }
}

export { UseReducer };
