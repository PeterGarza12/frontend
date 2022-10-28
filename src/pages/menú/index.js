import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import MenuC from "../../components/PageComponentes/Menú";

/*import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  /*CardTitle,
  CardBody
} from 'reactstrap';*/


function Menu(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >
      <MenuC></MenuC>
    </View>
  );
}

export default Menu;
