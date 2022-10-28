import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";

import {
  Container,
  /*Row,
  Col,
  Card,*/
  CardImg,
  /*CardTitle,
  CardBody*/
} from 'reactstrap';


function Test(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >
      <h1>Página para hacer pruebas de lo que vayamos creando</h1>
    </View>
  );
}

export default Test;
