import React from "react";
import { TitleCart } from "./styles";
import imgArrachera from "../../../res/arrachera.jpg";
import { ListOfCart } from "./listOfCart";

import { ContainerCart } from "./styles";


const listCart =(
  <ListOfCart
    productscart={
      [
        {
          name: 'Arrachera 1kg',
          image: imgArrachera,
          price: '$205.00'
        },
        {
          name: 'Tortillas 1kg',
          image: imgArrachera,
          price: '$45.00'
        },
        {
          name: 'Cerveza media',
          image: imgArrachera,
          price: '$50.00'
        },
        {
          name: 'T-bone 1kg',
          image: imgArrachera,
          price: '185.00'
        },
      ]
    }
  />
);

class CartC extends React.Component {

  render(){
    return(
      <ContainerCart className="Aquí está lo del carrito col-10">
        <TitleCart>CARRITO</TitleCart>
        <div className="d-flex flex-row">
        <div className="d-flex flex-column col-8 col-md-8">{listCart}</div>
        <div>TOTAL</div>
        </div>

      </ContainerCart>
    );
  }
}

export default CartC;
