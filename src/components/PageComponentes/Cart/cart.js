import React from "react";
import { TitleCart } from "./styles";
import imgTacos from "../../../res/tacos.png";
import imgHamburguesas from "../../../res/hamburguesa.jpg";
import imgPizzas from "../../../res/pizzas.jpg";
import imgBebidas from "../../../res/bebidas.jpg";
import { ListOfCart } from "./listOfCart";

import { ContainerCart } from "./styles";


const listCart =(
  <ListOfCart
    productscart={
      [
        {
          name: 'TACOS',
          image: imgTacos,
          price: '85.00'
        },
        {
          name: 'HAMBURGUESAS',
          image: imgHamburguesas,
          price: '85.00'
        },
        {
          name: 'PIZZAS',
          image: imgPizzas,
          price: '85.00'
        },
        {
          name: 'BEBIDAS',
          image: imgBebidas,
          price: '85.00'
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
