import React from 'react';

const SECURITY_CODE = 'paradise';

function UseState({ name }) {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log('Empezando el efecto');

    if (loading) {
      setTimeout(() => {
        console.log('Haciendo la validación');
        
        if (value === SECURITY_CODE) {
          setError(false);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }

        console.log('Terminando el efecto');
      }, 3000);
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el código de seguridad.</p>

      {(error && !loading) && (
        <p>Error: el código es incorrecto</p>
      )}

      {loading && (
        <p>Cargando...</p>
      )}

      <input 
        placeholder="Código de seguridad" 
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };
