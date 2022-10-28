import React from "react";
import { ContainerMenu } from "./styles";
import { H3Prueba } from "./styles";

class Menu extends React.Component {

  render(){
    return(
      <ContainerMenu className="d-flex justify-content-center">

          <H3Prueba >NUESTRO MENÚ</H3Prueba>
          <div className="col-sm">
          Categoría 1
          </div>
          <div className="col-sm">
          Categoría 2
          </div>
          <div className="col-sm">
          Categoría 3
          </div>
          <div className="col-sm">
          Categoría 4
          </div>

      </ContainerMenu>

    );
  }
}

export default Menu;
