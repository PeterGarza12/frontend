import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import MenuC from "../../components/PageComponentes/Menú";
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
  <MenuList
    products={[
      {
        name: 'Cereal Corn Flakes de Kelogs',
        price: '34.5',
        description: 'UN RICO CEREAL',
        image: 'http://images.kglobalservices.com/www.kelloggs.com.mx/es_mx/product/kic-3670/kicproductimage-119149_corn-flakes-300g.jpg',
      },
      {
        name: 'Cereal Corn Flakes de Kelogs',
        price: '34.5',
        description: 'UN RICO CEREAL',
        image: 'http://images.kglobalservices.com/www.kelloggs.com.mx/es_mx/product/kic-3670/kicproductimage-119149_corn-flakes-300g.jpg',
      },
      {
        name: 'Cereal Corn Flakes de Kelogs',
        price: '34.5',
        description: 'UN RICO CEREAL',
        image: 'http://images.kglobalservices.com/www.kelloggs.com.mx/es_mx/product/kic-3670/kicproductimage-119149_corn-flakes-300g.jpg',
      },
      {
        name: 'Cereal Zucaritas de Kelogs',
        price: '44.5',
        description: 'UN RICO CEREAL',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIfRcPagOEDUiF1SDgEV4lyMJ0103dduvAg&usqp=CAU',
      },
      {
        name: 'Cereal Froot Loops de Kelogs',
        price: '34.5',
        description: 'UN RICO CEREAL',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQIfRcPagOEDUiF1SDgEV4lyMJ0103dduvAg&usqp=CAU',
      },
      {
        name: 'Cereal Froot Lope de Kelogs',
        price: '34.5',
        description: 'UN RICO CEREAL',
        image: 'https://http2.mlstatic.com/D_NQ_NP_731638-MLM44700516954_012021-O.jpg',
      },
      {
        name: 'Cereal Froot Lope de Kelogs',
        price: '34.5',
        description: 'UN RICO CEREAL',
        image: 'https://http2.mlstatic.com/D_NQ_NP_731638-MLM44700516954_012021-O.jpg',
      },
    ]}
  />
);


function Menu(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >
      {listProducts}
    </View>
  );
}

export default Menu;
