import 'regenerator-runtime/runtime';
import React from 'react';
import { ProductCart } from './productCart';

export class ListOfCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productscart: props.productscart,
    };
  }

  async componentDidMount() {
      this.setState({
        productscart: this.props.productscart,
      });
    console.log(this.props);

  }


  render() {
    var productscart = this.state.productscart || [];
    console.log('ListOfCart',productscart);
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
