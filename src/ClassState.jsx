import React from 'react';

const SECURITY_CODE = 'paradise';

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: false,
      loading: false,
      deleted: false,
      confirmed: false,
    };
  }

  componentDidUpdate() {
    console.log('Actualizando');

    if (this.state.loading) {
      setTimeout(() => {
        console.log('Haciendo la validación');
        
        if (SECURITY_CODE === this.state.value) {
          this.setState({ error: false, loading: false, confirmed: true });
        } else {
          this.setState({ error: true, loading: false });
        }

        console.log('Terminando la validación');
      }, 3000);
    }
  }

  render() {
    if (!this.state.deleted && this.state.confirmed) {
      return (
        <div>
          <p>¿Seguro que quieres eliminar?</p>
          <button
            onClick={() => {
              this.setState({ deleted: true });
            }}
          >Sí, eliminar</button>
          <button
            onClick={() => {
              this.setState({ confirmed: false, value: '' });
            }}
          >No, cancelar</button>
        </div>
      );
    } else if (this.state.deleted && this.state.confirmed) {
      return (
        <div>
          <p>Eliminado con éxito</p>
          <button
            onClick={() => {
              this.setState({ confirmed: false, deleted: false, value: '' });
            }}
          >Recuperar</button>
        </div>
      );
    } else {
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

          <input 
            placeholder="Código de seguridad" 
            value={this.state.value}
            onChange={(event) => {
              this.setState({ value: event.target.value });
            }}
          />
          <button
            onClick={() => this.setState({ loading: true })}
          >Comprobar</button>
        </div>
      );
    }
  }
}

export { ClassState };
