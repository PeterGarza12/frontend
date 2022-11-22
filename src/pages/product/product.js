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
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <div>
      <ProductView name={"Carne Asada 1kg"} description={"Tradicional carne asada al estilo regio"} price={"50.00"}
      image={'https://reyparrillero.com/wp-content/uploads/2020/08/4-2-1.png'}></ProductView>

      </div>
    </View>
  );
}

export default Product;
