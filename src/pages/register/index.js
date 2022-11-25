import React, {useEffect} from "react";
import { View } from "../view/view";
import RegisterForm from "../../components/Forms/registerForm";
import { AltTheme } from "../../utils/colors";
import Store from "../../utils/store"
import { useNavigate } from "react-router-dom";
//import Footer from "../../components/PageComponentes/Footer";
import store2 from 'store2';
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

  const id = store2.get('USERID');
  useEffect(() => {
    if (id!=null){
     nav("/")
    }
  },[])

  return(
    <View banner= {''} header = {'Header'} theme={AltTheme} page = {"register"}>
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
            //alert(`${username}, ${email}, ${password}, ${phone}`);
            const store = new Store();
            store.SignUp(email, username, password, phone, (response) => {
              store.CreateSugg(response.data._id, 1, (respuesta)=>{});
              nav("/login");
            });
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
