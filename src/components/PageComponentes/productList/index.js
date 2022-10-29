import 'regenerator-runtime/runtime';
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Product } from '../productCard';
import { DetailCont, ImgContainer, ListContainer, ListImg, ListTitle, ListTitleBottom, ProductLister, TitleContainer } from './styles';
import listimg from "../../../res/hero.png"

export class ListOfProducts extends Component {
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
      <ListContainer className='d-flex flex-column flex-lg-row col-12'>
        <DetailCont className='col-12 col-lg-2 align-items-center align-items-lg-start' fluid>
          <TitleContainer className='d-flex flex-column justify-content-start align-items-start'>
            <ListTitle >PRODUCTOS</ListTitle>
            <ListTitleBottom >POPULARES</ListTitleBottom>
          </TitleContainer>
          <ImgContainer className="d-none d-lg-flex">
          <ListImg src={listimg} width={300} height={300}></ListImg>

          </ImgContainer>
        </DetailCont>


        <ProductLister>
          {products.map((x, i) => (
            i<4 ? (            <Col md="3" key={i}>
            <Product image={x.image} {...x}></Product>
          </Col>) : (<Col></Col>)

          ))}


        </ProductLister>
      </ListContainer>
    );
  }
}
