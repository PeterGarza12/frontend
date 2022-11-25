import React, {useEffect} from "react";
import { View } from "../view/view";
import LoginForm from "../../components/Forms/loginForm";
import { LoginTheme } from "../../utils/colors";
import Store from "../../utils/store"
import store2 from 'store2';
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
import logo from "../../res/logo2.png"

function Login(){
  let nav = useNavigate();

  const id = store2.get('USERID');
  useEffect(() => {
    if (id!=null){
     nav("/")
    }
  },[])

  return(
    <View banner= {''} header = {'Header'} theme={LoginTheme} page = {"login"} >

      <ContenedorLogin fluid className="col-11 col-sm-8 col-lg-5 col-xl-4 my-5" >
        <Container className="d-flex flex-row justify-content-center">
          <CardImg
            alt="Card image cap"
            src={logo}
            style={
              {
                width: 200,
                height: 180
              }
            }
            width="100%"/>
        </Container>

        <Container className="d-flex flex-row justify-content-center col-12">
          <LoginForm onLogin={(email, password)=>{
            const store = new Store();
            store.Login(email, password, (response) => {
              store2.set('TOKEN', response.token);
              store2.set('USERID', response.data._id);
              store2.set('USERNAME', response.data.username);
              nav("/");
            });
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
