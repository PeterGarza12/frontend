import React from "react";
import { View } from "../view/view";
import ProfileForm from "../../components/Forms/profileForm";
import { AltTheme } from "../../utils/colors";


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

import { ContenedorLogin } from "../login/styles";
import logo from "../../res/logooo.png"

function Profile(){


  return(
    <View banner= {''} header = {'Header'} theme={AltTheme}>
      <ContenedorLogin fluid className="col-11 col-sm-8 col-lg-5 col-xl-4 my-5" >
        <Container className="d-flex flex-row justify-content-center">
          <CardImg
            alt="Card image cap"
            src={logo}
            style={
              {
                width: 50,
                height: 53
              }
            }
            width="10%"/>
        </Container>

        <Container className="d-flex flex-row justify-content-center col-12">
          <ProfileForm onRegister={(username, email, password, phone)=>{
            alert(`${username}, ${email}, ${password}, ${phone}`);
          }}></ProfileForm>
        </Container>

      </ContenedorLogin>
    </View>


  );
}

export default Profile;
