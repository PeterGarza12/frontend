import React from 'react';
import {
  LabelForm,
  BtnForm,
  Proof
} from './styles';

// Formulario con componente de clase
class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      phone: ''
    }
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
        <h1>Perfil de Usuario</h1>
        <h3>Editar Perfil</h3>
        <LabelForm>
          Nombre de usuario
          <Proof type="text" className="col-12" value={username} placeholder="Usuario" />
        </LabelForm>

        <LabelForm>
          Correo
          <Proof type="email" className="col-12" value={email} placeholder="Correo"/>
        </LabelForm>

        <LabelForm>
          Constraseña
          <Proof type="password" className="col-12" value={password} placeholder="Contraseña"/>
        </LabelForm>

        <LabelForm>
          Teléfono
          <Proof type="number" className="col-12" value={phone} placeholder="00000"/>
        </LabelForm>

        <BtnForm type="submit">
         Editar perfil
        </BtnForm>
      </form>
    </div>
    );
  }
}

export default ProfileForm;
