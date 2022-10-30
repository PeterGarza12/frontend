import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import CategoriesOptions from "../../components/PageComponentes/categoriesOptions/catoptions";
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
      <CategoriesOptions></CategoriesOptions>
    </View>
  );
}

export default Menu;
