import React, {Fragment, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {
  ImgContainer, InfoContainer, ProductContainer, ProductBtn, ProductTitle, ProductText, ProductDesc, MainContainer
} from './styles';

export const ProductView = ({ name, price, description, image }) => {
  image = "http://localhost:8080/"+image;
  let nav = useNavigate();
  return (
    <MainContainer className='d-flex flex-column align-items-start' fluid>
      <ProductBtn className='col-12 col-lg-2' onClick={()=>{  nav("/menu/1");}}>Menú</ProductBtn>
      <ProductContainer fluid className='d-flex flex-column flex-lg-row justify-content-center'>
        <ImgContainer className='col-12 col-lg-5'>
          <ProductTitle>{name}</ProductTitle>
          <img className='d-flex' src={image} width="450" height="450" alt='producto'></img>
        </ImgContainer>

        <InfoContainer className='col-12 col-lg-7'>
          <div>
            <ProductText>¿Qué es?</ProductText>
            <ProductDesc>{description}</ProductDesc>
            <ProductText>${price}</ProductText>
          </div>
          <div>
            <form action="/action_page.php">
              <label for="quantity">Cantidad:</label>
              <input type="number" defaultValue={"1"} id="quantity" name="quantity" min="1" max="5"/>
            </form>
            <ProductBtn className='col-12 col-lg-5'>Agregar a carrito</ProductBtn>
          </div>

        </InfoContainer>
      </ProductContainer>
    </MainContainer>

  );
};
