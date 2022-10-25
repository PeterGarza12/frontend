import React from 'react';


// Formulario con componente de clase
class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange = (e) => {
    const { value } = e.target
    this.setState({ email: value })
  }

  handlePasswordChange = (e) => {
    const { value } = e.target
    this.setState({ password: value })
  }

  render() {
    const { email } = this.state
    const { password } = this.state

    const handleFormSubmit = (e) => {
      e.preventDefault();
      /*****Agregar validaciones de que el correo y contraseña estén bien escritos y todo eso ******/
      //alert(`Usuario: ${email} Password: ${password}`);
      this.props.onLogin(this.state.email, this.state.password);
    }

    return(
    <div className="LoginForm">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={this.handleEmailChange}/>
        </label>
        <label>
          Constraseña
          <input type="password" value={password} onChange={this.handlePasswordChange}/>
        </label>
        <button type="submit">
          Enter
        </button>
      </form>
    </div>
    );
  }
}

export default LoginForm;
