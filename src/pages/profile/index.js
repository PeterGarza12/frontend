import React from "react";
import { View } from "../view/view";
import ProfileForm from "../../components/Forms/profileForm";
import { AltTheme } from "../../utils/colors";
import Store from '../../utils/store';
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

import { ContenedorLogin } from "../login/styles";
import logo from "../../res/logooo.png"

function Profile(){
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
                width: 50,
                height: 53
              }
            }
            width="10%"/>
        </Container>

        <Container className="d-flex flex-row justify-content-center col-12">
          <ProfileForm onUpdateProfile={(userid, username, password, phone)=>{
            const store = new Store();
            store.UpdateProfile(userid, username, password, phone, (response) => {
              window.location.reload();
            });
          }}></ProfileForm>
        </Container>

      </ContenedorLogin>
    </View>


  );
}

export default Profile;
