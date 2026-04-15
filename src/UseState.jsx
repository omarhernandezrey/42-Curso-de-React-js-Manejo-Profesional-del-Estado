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

  React.useEffect(() => {
    console.log('Empezando el efecto');

    if (state.loading) {
      setTimeout(() => {
        console.log('Haciendo la validación');
        
        if (state.value === SECURITY_CODE) {
          setState({ 
            ...state,
            error: false,
            loading: false,
            confirmed: true,
          });
        } else {
          setState({ 
            ...state,
            error: true,
            loading: false,
          });
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
          onClick={() => {
            setState({ 
              ...state,
              deleted: true,
            });
          }}
        >Sí, eliminar</button>
        <button
          onClick={() => {
            setState({ 
              ...state,
              confirmed: false,
              value: '',
            });
          }}
        >No, cancelar</button>
      </React.Fragment>
    );
  } else if (state.deleted && state.confirmed) {
    return (
      <React.Fragment>
        <p>Eliminado con éxito</p>
        <button
          onClick={() => {
            setState({ 
              ...state,
              confirmed: false,
              deleted: false,
              value: '',
            });
          }}
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
            setState({ 
              ...state,
              value: event.target.value,
            });
          }}
        />
        <button onClick={() => {
          // Forma imperativa: especificamos paso a paso qué cambiar
          setState({ 
            ...state,
            loading: true,
          });
        }}>Comprobar</button>
      </div>
    );
  }
}

export { UseState };
