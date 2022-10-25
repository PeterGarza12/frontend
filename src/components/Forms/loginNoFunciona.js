import React from "react";
import {Button} from 'reactstrap';
import {AvForm, AvField} from 'availity-reactstrap-validation';

export default class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.props = props;
    this.state = {email: '', password: ''};
  }

  handleValidSubmit = async(event, values)=>{
    this.setState({email: values.email, password: values.password});
    this.props.onLogin(this.state.email, this.state.password);
    alert("Iniciaste sesión correctamente");
  }

  handleInvalidSubmit = (event, errors, values) =>{
    this.setState({email: values.email, errors:true});
    alert("Inicio de sesión fallido");
  }

  render(){
    return(
      <AvForm onValidSubmit ={this.handleValidSubmit} onInvalidSubmit={this.onInvalidSubmit}>
        <AvField name="email" label="Email" type="email"
                  validate={{
                    required: {value:true, errorMessage: 'Por favor ingrese un correo electrónico'},
                    pattern: {value: '([\w0-9\_\-\.]{1,64}[\@]{1}[a-z]{4,15}[\.]{1}[a-z]{2,3}[\.]{1}[a-z]{2}$)|([\w0-9\_\-\.]{1,64}[\@]{1}[a-z]{4,15}[\.]{1}[a-z]{3}$)', errorMessage: 'Ingrese un email válido'},
                  }}/>
        <AvField name="password" label="Contraseña" type="password"
                  validate={{
                    required: {value:true, errorMessage: 'Por favor ingrese su contraseña'},
                    pattern: {value: '(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,}))', errorMessage: 'La contraseña debe tener al menos 1 dígito, 1 letra minúscula, 1 letra mayúscula, 1 símbolo'},
                    minLength: {value: 8, errorMessage: 'Debe tener al menos 8 caracteres'}
                  }}/>
        <Button id = "submit" className="w-100">Iniciar sesión</Button>
      </AvForm>
    );
  }

}
