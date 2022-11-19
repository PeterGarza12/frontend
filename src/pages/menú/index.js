import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import CategoriesOptions from "../../components/PageComponentes/categoriesOptions/catoptions";
import { MenuList } from "../../components/PageComponentes/menuList";
/*import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  /*CardTitle,
  CardBody
} from 'reactstrap';*/

const listProducts = (
  [

    ]
);


function Menu(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >
      <CategoriesOptions></CategoriesOptions>
      <MenuList products={listProducts}></MenuList>


    </View>
  );
}

export default Menu;
