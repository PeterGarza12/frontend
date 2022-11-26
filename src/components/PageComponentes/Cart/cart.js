import React from "react";
import { TitleCart, TotalSection } from "./styles";
import { ListOfCart } from "./listOfCart";
import Store from '../../../utils/store';
import store2 from 'store2';

import {
  ContainerCart,
  TotalCart,
  PayCartBtn
} from "./styles";

class CartC extends React.Component {
  constructor() {
    super();
    this.state = {
      products: null,
      total: '',
      productList: null
    };
  }

  async componentDidMount() {
    var userid = store2.get('USERID');
    var productos = [];
    var pretotal = 0;
    try {
      new Store().GetCart(userid, {
        callback: async (response) => {
          this.setState({
            products : response.data.products
          }, (respuesta)=>{

            this.state.products.forEach(element => {
              new Store().getProduct(element.id, {callback: (respuesta)=>{

                respuesta.data["amount"]=element.amount;
                pretotal+=respuesta.data["price"]*element.amount;
                console.log('Precio', respuesta.data["price"]);
                console.log('Cantidad', element.amount);
                console.log('Pretotal', pretotal);

                productos.push(respuesta.data);
                this.setState({
                  productList: productos,
                  total: pretotal
                });
              }});

            });

            // productos.forEach(function(itm){
            //   itm.amount = 1;
            //  });

            //const capital = productos.map(i => { i.amount = 5; return i; })
          });

        },
      });


    } catch (error) {
      console.log(error);
    }
  }



  render(){
    var products = this.state.productList || [];
    var total = this.state.total || [];
    console.log(products);

    return(
      <ContainerCart className="Aquí está lo del carrito col-10">

        <TitleCart>CARRITO</TitleCart>

        <div className="d-flex flex-column-reverse flex-md-row">

          <div className="d-flex flex-column col-12 col-md-8">
            <ListOfCart cart={products}></ListOfCart>
            </div>

          <TotalSection className="d-flex flex-column">
            <TotalCart className="d-flex flex-row">
              <div>total:      $</div>
              <div>{total}</div>
            </TotalCart>
            <PayCartBtn>Pagar</PayCartBtn>
          </TotalSection>

        </div>

      </ContainerCart>
    );
  }
}

export default CartC;
