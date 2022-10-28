import React from "react";
import { ContainerMenu } from "./styles";
import { H3Prueba } from "./styles";
import imgTacos from "../../../res/tacos.png";
import imgHamburguesas from "../../../res/hamburguesa.jpg";
import imgPizzas from "../../../res/pizzas.jpg";
import imgBebidas from "../../../res/bebidas.jpg";
import { ListOfCategories } from "./listOfCategories";


const listCategories =(
  <ListOfCategories
    categories={
      [
        {
          name: 'TACOS',
          image: imgTacos,
        },
        {
          name: 'HAMBURGUESAS',
          image: imgHamburguesas,
        },
        {
          name: 'PIZZAS',
          image: imgPizzas,
        },
        {
          name: 'BEBIDAS',
          image: imgBebidas,
        },
      ]
    }
  />
);

class MenuC extends React.Component {

  render(){
    return(
      <ContainerMenu className="d-flex justify-content-left">
          <H3Prueba className="col-sm-2">MENÚ</H3Prueba>
          <div className="col-sm-9">{listCategories}</div>
      </ContainerMenu>

    );
  }
}

export default MenuC;
