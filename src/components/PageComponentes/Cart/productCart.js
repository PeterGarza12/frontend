import React from 'react';
import {
  CartCard,
  CartProductImage,
  CartProductInfo,
  CartProductTitle,
} from './styles';

export const ProductCart = ({ name, image, price }) => {
  return (
    <CartCard>
      <CartProductImage  src={image}></CartProductImage>
      <CartProductInfo className='d-flex flex-column LAINFO'>
        <CartProductTitle >{name}</CartProductTitle>
        <div>{price}</div>
        <div>BOTONES</div>
      </CartProductInfo>
    </CartCard>
  );
};
