import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import { Product } from '../productCard';
import { ListContainer, CatTitle } from './styles';

export class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
    };
  }


  render() {
    var products = this.state.products || [];
    console.log('Products2', products);
    return (
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <CatTitle className='d-flex flex-row justify-content-center justify-content-lg-start col-12 col-lg-10'>
            Categoria
        </CatTitle>
        <div className="d-flex flex-column flex-lg-row flex-wrap justify-content-center align-items-center col-12 col-lg-10" fluid>
        <ListContainer className='d-flex flex-column flex-lg-row flex-wrap justify-content-center align-items-center col-12'>
        {products.map((x, i) => (
          <div key={i}>
            <Product image={x.image} {...x}></Product>
          </div>
          ))}
        </ListContainer>
        </div>


      </div>

    );
  }
}
