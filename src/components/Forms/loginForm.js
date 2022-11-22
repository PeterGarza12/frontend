import React from 'react';
import {
  LabelForm,
  BtnForm,
  Proof
} from './styles';

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

      let expresion = new RegExp(/(^[a-zA-Z0-9\-_]{8}$)/);
      if(this.state.password.match(expresion)===null)
      {
        alert("Contraseña incorrecta");
      }
      else
      {
        this.props.onLogin(this.state.email, this.state.password);
      }

    }

    return(
    <div className="LoginForm col-10">
      <form onSubmit={handleFormSubmit}>
        <h1>¡Bienvenido!</h1>
        <LabelForm>
          Correo
          <Proof type="email" className="col-12" placeholder="Ingrese su correo electrónico" value={email} onChange={this.handleEmailChange}/>
        </LabelForm>

        <LabelForm>
          Constraseña
          <Proof type="password" className="col-12" placeholder="Ingrese su contraseña" value={password} onChange={this.handlePasswordChange}/>
        </LabelForm>

        <BtnForm type="submit">
          Iniciar sesión
        </BtnForm>
      </form>
    </div>
    );
  }
}

export default LoginForm;
