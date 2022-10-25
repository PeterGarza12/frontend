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
      this.props.onLogin(this.state.email, this.state.password);
    }

    return(
    <div className="LoginForm col-10">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar sesión</h2>
        <LabelForm>
          Correo
          <Proof type="email" className="col-12" value={email} onChange={this.handleEmailChange}/>
        </LabelForm>

        <LabelForm>
          Constraseña
          <Proof type="password" className="col-12" value={password} onChange={this.handlePasswordChange}/>
        </LabelForm>

        <BtnForm type="submit">
          Enter
        </BtnForm>
      </form>
    </div>
    );
  }
}

export default LoginForm;
