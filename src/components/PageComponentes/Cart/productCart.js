import React from 'react';
import {
  CartCard,
  CartProductImage,
  CartProductInfo,
  CartProductTitle,
  CartProductBtn
} from './styles';
import { useNavigate } from "react-router-dom";

export const ProductCart = ({ name, image, price }) => {

  let nav = useNavigate();

  return (
    <CartCard>
      <CartProductImage  src={image} onClick={()=>{
          nav("/product")
        }}></CartProductImage>
      <CartProductInfo className='d-flex flex-column LAINFO'>
        <CartProductTitle >{name}</CartProductTitle>
        <div>{price}</div>
        <div className='d-flex flex-row'>
          <CartProductBtn>Eliminar</CartProductBtn>
          <form>
            <label for="cantidad">Cantidad: </label>
              <select name='cantidad'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
          </form>
        </div>
      </CartProductInfo>
    </CartCard>
  );
};
