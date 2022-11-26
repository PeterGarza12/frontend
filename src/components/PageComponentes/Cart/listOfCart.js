import 'regenerator-runtime/runtime';
import React, {useEffect} from 'react';
import { ProductCart } from './productCart';

export class ListOfCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart,
    };
  }

  render() {
    var productscart = this.props.cart || [];
        return (
      productscart.map((x, i) => (
        <div className='col col-sm' key={i}>
          <ProductCart image={x.image} {...x}></ProductCart>
        </div>
        )
      )
    );
  }
}
