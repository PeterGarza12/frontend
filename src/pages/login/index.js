import React from "react";
import LoginForm from "../../components/Forms/loginForm";
import Footer from "../../components/PageComponentes/Footer";

import {
  Container,
  /*Row,
  Col,
  Card,*/
  CardImg,
  /*CardTitle,
  CardBody*/
} from 'reactstrap';

import { ContenedorLogin } from "./styles";

import logo from "../../res/logo.png"

function Login(){

  return(
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
          console.log(`${email}, ${password}`);
        }}></LoginForm>
      </Container>

      <Footer></Footer>

    </ContenedorLogin>

  );
}

export default Login;
