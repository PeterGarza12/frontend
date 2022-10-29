import React from 'react';
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductDescription,
  ProductContainer,
  DetailsCont
} from './styles';
import logo from "../../../res/ProductTest.png"

export const Product = ({ name, price, description, image }) => {
  console.log('Image', image)
  return (
    <ProductCard fluid>
      <ProductContainer fluid to={`/product/${name}`}>
        <ProductImage src={logo}></ProductImage>
        <DetailsCont>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>${price}</ProductPrice>
          <ProductDescription>{description}</ProductDescription>
        </DetailsCont>
      </ProductContainer>
      <ProductButton>Ver producto</ProductButton>
    </ProductCard>
  );
};
