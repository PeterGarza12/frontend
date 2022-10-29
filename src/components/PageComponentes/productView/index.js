import React, {Fragment, useState, useEffect } from 'react';
import {
  ImgContainer, InfoContainer, ProductContainer,
} from './styles';
import { Container, Row, Col} from 'reactstrap';
import logo from "../../../res/ProductTest.png"

export const ProductView = ({ name, price, description, image }) => {
  console.log('Image', image)
  return (
    <Container className='d-flex flex-column align-items-center align-items-lg-start' fluid>
      <button className='col-5 col-lg-2'>Menú</button>
      <ProductContainer fluid className='d-flex flex-column flex-lg-row'>
        <ImgContainer className='col-12 col-lg-5'>
          <h1>El producto</h1>
          <img src={logo} width="450" alt='producto'></img>
        </ImgContainer>

        <InfoContainer className='col-12 col-lg-7'>
        <h2>Qué es</h2>
        <span>Mucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho textoMucho texto</span>
        <h2>$50.00</h2>
        <button>Comprar</button>
        </InfoContainer>
      </ProductContainer>
    </Container>

  );
};
