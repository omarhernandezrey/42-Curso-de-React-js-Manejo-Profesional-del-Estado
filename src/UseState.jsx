import React from 'react';

const SECURITY_CODE = 'paradise';

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({ 
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({ 
      ...state,
      error: true,
      loading: false,
    });
  };

  const onWrite = (newValue) => {
    setState({ 
      ...state,
      value: newValue,
    });
  };

  const onCheck = () => {
    setState({ 
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({ 
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({ 
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    });
  };

  React.useEffect(() => {
    console.log('Empezando el efecto');

    if (state.loading) {
      setTimeout(() => {
        console.log('Haciendo la validación');
        
        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log('Terminando el efecto');
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>¿Seguro que quieres eliminar?</p>
        <button
          onClick={onDelete}
        >Sí, eliminar</button>
        <button
          onClick={onReset}
        >No, cancelar</button>
      </React.Fragment>
    );
  } else if (state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
          onClick={onReset}
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
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  }
}

export { UseState };
