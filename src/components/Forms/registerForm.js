/* eslint-disable no-useless-escape */
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
    var bandera = true;

    const handleFormSubmit = (e) => {
      e.preventDefault();
      /*****Agregar validaciones de que el correo y contraseña estén bien escritos y todo eso ******/
      //alert(`Usuario: ${email} Password: ${password}`);

      let usernameregex = new RegExp(/(^[a-zA-Z0-9\-_]{3,50}$)/);
      let passwordregex = new RegExp(/(^[a-zA-Z0-9\-_]{8}$)/);
      let emailregex = new RegExp(/([\w0-9\_\-\.]{1,64}[\@]{1}[a-z]{4,15}[\.]{1}[a-z]{2,3}[\.]{1}[a-z]{2}$)|([\w0-9\_\-\.]{1,64}[\@]{1}[a-z]{4,15}[\.]{1}[a-z]{3}$)/);
      let phoneregex = new RegExp(/(^[\d]{10}$)/);
      var aviso="Los siguientes datos son inválidos: ";

      if(this.state.email.match(emailregex)===null)
      {
         bandera=false;
         aviso+="\nEmail inválido. ";
      }
      if(this.state.username.match(usernameregex)===null)
      {
         bandera=false;
         aviso+="\nNombre de usuario inválido. ";
      }
      if(this.state.password.match(passwordregex)===null)
      {
        bandera=false;
        aviso+="\nLa contraseña debe de ser de 8 caracteres. ";
      }
      if(this.state.phone.match(phoneregex)===null)
      {
        bandera=false;
        aviso+="\nEl número de teléfono debe tener 10 dígitos. ";
      }

      if(bandera===true){
        this.props.onRegister(this.state.username, this.state.email, this.state.password, this.state.phone);
      } else {
        alert(aviso);
        return;
      }
    }

    return(
    <div className="RegisterForm col-10">
      <form onSubmit={handleFormSubmit}>
        <h1>¡Regístrate!</h1>

        <LabelForm>
          Correo
          <Proof type="email" className="col-12" value={email} placeholder="Ingrese correo electrónico" onChange={this.handleEmailChange}/>
        </LabelForm>

        <LabelForm>
          Nombre de usuario
          <Proof type="text" className="col-12" value={username} placeholder="Ingrese nombre de usuario" onChange={this.handleUsernameChange}/>
        </LabelForm>

        <LabelForm>
          Constraseña
          <Proof type="password" className="col-12" value={password} placeholder="Ingrese contraseña" onChange={this.handlePasswordChange}/>
        </LabelForm>

        <LabelForm>
          Teléfono
          <Proof type="number" className="col-12" value={phone} placeholder="Ingrese número de teléfono" onChange={this.handlePhoneChange}/>
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
