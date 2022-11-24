import React from "react";
import { ContainerMenu } from "./styles";
import { H3Prueba } from "./styles";
import imgTacos from "../../../res/tacos.png";
import imgHamburguesas from "../../../res/hamburguesa.jpg";
import imgPizzas from "../../../res/pizzas.jpg";
import imgBebidas from "../../../res/bebidas.jpg";
import { ListOfCategories } from "./listOfCategories";
import { useNavigate } from "react-router-dom";

//class MenuC extends React.Component {
export const MenuC = () => {

  let nav = useNavigate();

  return(
    <ContainerMenu className="d-flex">
        <H3Prueba className="col-sm-2" onClick={()=>{
        nav("/menu")
      }}>MENÚ</H3Prueba>
        <div className="col-sm-9">
          <ListOfCategories></ListOfCategories>
        </div>
    </ContainerMenu>
  );

}


export default MenuC;
