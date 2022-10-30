import React from "react";
import { View } from "../view/view";
import RegisterForm from "../../components/Forms/registerForm";
import { AltTheme } from "../../utils/colors";

import { useNavigate } from "react-router-dom";
//import Footer from "../../components/PageComponentes/Footer";

import {
  Container,
  /*Row,
  Col,
  Card,*/
  CardImg,
  /*CardTitle,
  CardBody*/
} from 'reactstrap';

import { ContenedorLogin, BtnLink } from "../login/styles";
import logo from "../../res/logo2.png"

function Register(){
  let nav = useNavigate();

  return(
    <View banner= {''} header = {'Header'} theme={AltTheme}>
      <ContenedorLogin fluid className="col-11 col-sm-8 col-lg-5 col-xl-4 my-5" >
        <Container className="d-flex flex-row justify-content-center">
          <CardImg
            alt="Card image cap"
            src={logo}
            style={
              {
                width: 170,
                height: 150
              }
            }
            width="100%"/>
        </Container>

        <Container className="d-flex flex-row justify-content-center col-12">
          <RegisterForm onRegister={(username, email, password, phone)=>{
            alert(`${username}, ${email}, ${password}, ${phone}`);
          }}></RegisterForm>
        </Container>
        <BtnLink onClick={()=>{
          nav("/login")
        }}>¿Ya tienes una cuenta? Inicia sesión</BtnLink>
      </ContenedorLogin>
    </View>


  );
}

export default Register;
