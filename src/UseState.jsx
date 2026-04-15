import React from 'react';

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log('Empezando el efecto');

    if (loading) {
      setTimeout(() => {
        console.log('Haciendo la validación');
        setLoading(false);
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

      <input placeholder="Código de seguridad" />
      <button onClick={() => setLoading(true)}>Comprobar</button>
    </div>
  );
}

export { UseState };
