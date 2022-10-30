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
        image: "https://reyparrillero.com/wp-content/uploads/2020/08/4-2-1.png",
      },
      {
        name: 'Arrachera 1kg',
        price: '150.50',
        description: 'Rica arrachera (1kg) servida junto con cebolla asada',
        image: "https://humogris.com/wp-content/uploads/2021/09/70.png",
      },
      {
        name: 'Salchicha Asada',
        price: '74.00',
        description: 'Tradicional salchicha roja asada (4 piezas)',
        image: 'https://us.123rf.com/450wm/dianazh/dianazh1904/dianazh190400362/121103987-salchichas-a-la-parrilla-aislado-sobre-un-fondo-blanco-.jpg?ver=6',
      },
      {
        name: 'Cerveza Media',
        price: '54.50',
        description: 'Cerveza de tamaño medio',
        image: 'https://www.seekpng.com/png/detail/30-305158_tarros-de-cerveza-png.png',
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
