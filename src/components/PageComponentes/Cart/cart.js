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


var listCart = (
  [

    ]
);

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
    try {
      new Store().GetCart(userid, {
        callback: async (response) => {
          this.setState({
            products : response.data.products
          }, (respuesta)=>{
            console.log(this.state.products)
            this.state.products.forEach(element => {
              new Store().getProduct(element.id, {callback: (respuesta)=>{

                productos.push(respuesta.data);
                this.setState({
                  productList: productos
                });
                console.log('Adentro', this.state.productList);
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

    console.log('Render', products);
    return(
      <ContainerCart className="Aquí está lo del carrito col-10">

        <TitleCart>CARRITO</TitleCart>

        <div className="d-flex flex-column-reverse flex-md-row">

          <div className="d-flex flex-column col-12 col-md-8">
            <ListOfCart productscart={products}></ListOfCart>
            </div>

          <TotalSection className="d-flex flex-column">
            <TotalCart className="d-flex flex-row">
              <div>total:      $</div>
              <div>1000</div>
            </TotalCart>
            <PayCartBtn>Pagar</PayCartBtn>
          </TotalSection>

        </div>

      </ContainerCart>
    );
  }
}

export default CartC;
