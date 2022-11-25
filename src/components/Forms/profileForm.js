import React from 'react';
import {
  LabelForm,
  BtnForm,
  BtnEdit,
  Proof
} from './styles';
import Store from '../../utils/store';
import store2 from 'store2';

// Formulario con componente de clase
class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userid: '',
      username: '',
      email: '',
      password: '',
      phone: ''
    }
  }


  async componentDidMount() {
    var userid = store2.get('USERID');
    try {
      new Store().getProfile(userid, {
        callback: async (response) => {
          console.log('response', response);
            this.setState({
              userid: userid,
              username: response.data.username,
              email: response.data.email,
              password: response.data.password,
              phone: response.data.phone
            });
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  handlerEnable = (e) => {
    e.preventDefault();
    document.getElementById("username").disabled=false;
    document.getElementById("password").disabled=false;
    document.getElementById("phone").disabled=false;
    document.getElementById("password").value="";
    document.getElementById("editar").hidden=true;
    document.getElementById("guardar").hidden=false;
    document.getElementById("cancel").hidden=false;
  }

  handlerCancel = (e) => {
    window.location.reload();
  }

  handleUsernameChange = (e) => {
    const { value } = e.target
    this.setState({ username: value })
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
      let phoneregex = new RegExp(/(^[\d]{10}$)/);
      var aviso="Los siguientes datos son inválidos: ";

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
        this.props.onUpdateProfile(this.state.userid, this.state.username, this.state.password, this.state.phone);
      } else {
        alert(aviso);
        return;
      }

    }

    return(
    <div className="RegisterForm col-10">
      <form>
        <h1>Perfil de {username}</h1>

        <LabelForm>
          Correo electrónico
          <Proof disabled type="email" id='email' className="col-12" value={email} placeholder="Correo"/>
        </LabelForm>

        <LabelForm>
          Nombre de usuario
          <Proof disabled type="text" id='username' className="col-12" value={username} placeholder="Nombre de usuario" onChange={this.handleUsernameChange} />
        </LabelForm>

        <LabelForm>
          Constraseña
          <Proof disabled type="password" id='password' className="col-12" placeholder="Contraseña" onChange={this.handlePasswordChange}/>
        </LabelForm>

        <LabelForm>
          Teléfono
          <Proof disabled type="number" id='phone' className="col-12" value={phone} placeholder="Número de teléfono" onChange={this.handlePhoneChange}/>
        </LabelForm>

        <BtnEdit id="editar" onClick={this.handlerEnable}>
         Editar perfil
        </BtnEdit>

        <BtnForm id="guardar" type='submit' hidden onClick={handleFormSubmit}>
         Actualizar perfil
        </BtnForm>
        <BtnEdit id="cancel" hidden onClick={this.handlerCancel}>
         Cancelar
        </BtnEdit>
      </form>
    </div>
    );
  }
}

export default ProfileForm;
