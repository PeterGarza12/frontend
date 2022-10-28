import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import Menu from "../../components/PageComponentes/Menú";

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
      <Menu></Menu>
    </View>
  );
}

export default Test;
