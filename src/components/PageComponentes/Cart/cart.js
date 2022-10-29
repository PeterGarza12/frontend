import React from "react";
import { H3Prueba } from "./styles";
import imgTacos from "../../../res/tacos.png";
import imgHamburguesas from "../../../res/hamburguesa.jpg";
import imgPizzas from "../../../res/pizzas.jpg";
import imgBebidas from "../../../res/bebidas.jpg";
import { ListOfCart } from "./listOfCart";


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
      <div className="Aquí está lo del carrito">
          <H3Prueba className="col-sm-2">CARRITO</H3Prueba>
          <div className="col-sm-9">{listCart}</div>
      </div>

    );
  }
}

export default CartC;
