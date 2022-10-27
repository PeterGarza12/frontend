import React from "react";
import { View } from "../view/view";
import LoginForm from "../../components/Forms/loginForm";

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

import { BtnLink, ContenedorLogin } from "./styles";
import logo from "../../res/logo.png"

function Login(){
  let nav = useNavigate();

  return(
    <View banner= {'Prueba'} header = {'Header'} logged = {false} >
      <ContenedorLogin fluid className="col-11 col-sm-8 col-lg-5 col-xl-4 my-5" >
        <Container className="d-flex flex-row justify-content-center">
          <CardImg
            alt="Card image cap"
            src={logo}
            style={
              {
                width: 211,
                height: 53
              }
            }
            width="100%"/>
        </Container>

        <Container className="d-flex flex-row justify-content-center col-12">
          <LoginForm onLogin={(email, password)=>{
            alert(`${email}, ${password}`);
          }}></LoginForm>
        </Container>
        <BtnLink onClick={()=>{
          nav("/register")
        }}>¿No tienes cuenta? Regístrate</BtnLink>
      </ContenedorLogin>
    </View>


  );
}

export default Login;
