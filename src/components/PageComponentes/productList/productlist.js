import React from "react";
import { ListOfProducts } from ".";

const listProducts = (
  <ListOfProducts
    products={[
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
        image: 'https://http2.mlstatic.com/D_NQ_NP_731638-MLM44700516954_012021-O.jpg',
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


class ListProductsComponent extends React.Component {

  render(){
    return(
      <div className="d-flex" fluid>{listProducts}</div>
    );
  }
}

export default ListProductsComponent;
