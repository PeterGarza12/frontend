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
      <div>
      <ProductView name={"Alitas BBQ"} description={"Unue se compraUn producto que se compra"} price={"50.00"}
      image={'http://images.kglobalservices.com/www.kelloggs.com.mx/es_mx/product/kic-3670/kicproductimage-119149_corn-flakes-300g.jpg'}></ProductView>

      </div>
    </View>
  );
}

export default Product;
