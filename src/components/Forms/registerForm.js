import React from 'react';
import {
  LabelForm,
  BtnForm,
  Proof
} from './styles';

// Formulario con componente de clase
class RegisterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      phone: ''
    }
  }

  handleUsernameChange = (e) => {
    const { value } = e.target
    this.setState({ username: value })
  }

  handleEmailChange = (e) => {
    const { value } = e.target
    this.setState({ email: value })
  }

  handlePasswordChange = (e) => {
    const { value } = e.target
    this.setState({ password: value })
  }

  handlePhoneChange = (e) => {
    const { value } = e.target
    this.setState({ phone: value })
  }

  render() {
    const { username } = this.state
    const { email } = this.state
    const { password } = this.state
    const { phone } = this.state

    const handleFormSubmit = (e) => {
      e.preventDefault();
      /*****Agregar validaciones de que el correo y contraseña estén bien escritos y todo eso ******/
      //alert(`Usuario: ${email} Password: ${password}`);
      this.props.onRegister(this.state.username, this.state.email, this.state.password, this.state.phone);
    }

    return(
    <div className="RegisterForm col-10">
      <form onSubmit={handleFormSubmit}>
        <h1>¡Regístrate!</h1>
        <LabelForm>
          Nombre de usuario
          <Proof type="text" className="col-12" value={username} onChange={this.handleUsernameChange}/>
        </LabelForm>

        <LabelForm>
          Correo
          <Proof type="email" className="col-12" value={email} onChange={this.handleEmailChange}/>
        </LabelForm>

        <LabelForm>
          Constraseña
          <Proof type="password" className="col-12" value={password} onChange={this.handlePasswordChange}/>
        </LabelForm>

        <LabelForm>
          Teléfono
          <Proof type="number" className="col-12" value={phone} onChange={this.handlePhoneChange}/>
        </LabelForm>

        <BtnForm type="submit">
          Registrarme
        </BtnForm>
      </form>
    </div>
    );
  }
}

export default RegisterForm;
