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

export const Product = ({ _id, name, price, description, image }) => {
  image = "http://localhost:8080/"+image;
  return (
    <ProductCard id={_id} fluid>
      <ProductContainer fluid to={`/product/${_id}`}>
        <ProductImage src={image}></ProductImage>
        <DetailsCont>
          <ProductTitle>{name}</ProductTitle>
          <ProductPrice>${price}</ProductPrice>
          <ProductDescription>{description}</ProductDescription>
        </DetailsCont>
      </ProductContainer>
      <ProductButton to={`/product/${_id}`}>Ver producto</ProductButton>
    </ProductCard>
  );
};
