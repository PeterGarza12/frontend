import React from "react";
import LoginForm from "../../components/Forms/loginForm";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody
} from 'reactstrap';

import { ContenedorLogin } from "./styles";

import logo from "../../res/logo.png"

function Login(){

  return(
    <ContenedorLogin fluid className="col-l-12 col-s-4 my-5 ">
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
      <Container className="d-flex flex-row justify-content-center">
      <LoginForm onLogin={(email, password)=>{
          console.log(`${email}, ${password}`);
        }}></LoginForm>
      </Container>
    </ContenedorLogin>



  );
}

export default Login;
