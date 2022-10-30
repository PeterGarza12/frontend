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

export const Product = ({ name, price, description, image }) => {
  return (
    <ProductCard fluid>
      <ProductContainer fluid to={`/product/${name}`}>
        <ProductImage src={image}></ProductImage>
        <DetailsCont>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>${price}</ProductPrice>
          <ProductDescription>{description}</ProductDescription>
        </DetailsCont>
      </ProductContainer>
      <ProductButton to={`/product/${name}`}>Ver producto</ProductButton>
    </ProductCard>
  );
};
