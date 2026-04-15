import React from 'react';

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    };
  }

  // componentWillMount() {}
  // componentDidMount() {}

  componentDidUpdate() {
    console.log('Actualizando');

    if (this.state.loading) {
      setTimeout(() => {
        console.log('Haciendo la validación');
        this.setState({ loading: false });
        console.log('Terminando la validación');
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>

        {(this.state.error && !this.state.loading) && (
          <p>Error: el código es incorrecto</p>
        )}

        {this.state.loading && (
          <p>Cargando...</p>
        )}

        <input placeholder="Código de seguridad" />
        <button
          onClick={() => this.setState({ loading: true })}
        >Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
