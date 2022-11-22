import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import CartC from "../../components/PageComponentes/Cart/cart";

/*import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  /*CardTitle,
  CardBody
} from 'reactstrap';*/


function Cart(){

  return(
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <CartC></CartC>
    </View>
  );
}

export default Cart;
