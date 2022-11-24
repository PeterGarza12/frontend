import React from "react";
import { ListOfProducts } from ".";
import pollo from "../../../res/ProductTest.png"
import arrachera from "../../../res/arrachera.jpg"

const listProducts = (
  <ListOfProducts
    products={[
      {
        name: 'Carne Asada 1kg',
        price: '134.50',
        description: 'Tradicional carne asada al estilo regio',
        image: "http://localhost:8080/file-1669251533037.png",
      },
      {
        name: 'Arrachera 1kg',
        price: '150.50',
        description: 'Rica arrachera (1kg) servida junto con cebolla asada',
        image: "http://localhost:8080/file-1669251649022.png",
      },
      {
        name: 'Salchicha Asada',
        price: '74.00',
        description: 'Tradicional salchicha roja asada (4 piezas)',
        image: 'http://localhost:8080/file-1669251657681.png',
      },
      {
        name: 'Cerveza Media',
        price: '54.50',
        description: 'Cerveza de tamaño medio',
        image: 'http://localhost:8080/file-1669251662168.png',
      },
    ]}
  />
);


class ListProductsComponent extends React.Component {

  render(){
    return(
      <div className="d-flex" fluid>{listProducts}</div>
    );
  }
}

export default ListProductsComponent;
