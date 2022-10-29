import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import { ProductView } from "../../components/PageComponentes/productView";

/*import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  /*CardTitle,
  CardBody
} from 'reactstrap';*/


function Product(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >
      <ProductView></ProductView>
    </View>
  );
}

export default Product;
