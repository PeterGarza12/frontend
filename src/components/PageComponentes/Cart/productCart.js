import React from 'react';
import {
  CartCard,
  CartProductImage,
  CartProductInfo,
  CartProductTitle,
  CartProductBtn
} from './styles';
import { useNavigate } from "react-router-dom";
import Store from '../../../utils/store';
import store2 from 'store2';

export const ProductCart = ({ _id, name, image, price, amount }) => {

  let nav = useNavigate();
  image = "http://localhost:8080/"+image;

  const deleteProduct = (e) => {
    e.preventDefault();
    var userid = store2.get('USERID');

      const store = new Store();
      store.DeleteFromCart(userid, _id, (response) => {
        window.location.reload();
      });

  }

  return (
    <CartCard>
      <CartProductImage  src={image} onClick={()=>{
          nav("/product/"+_id)
        }}></CartProductImage>
      <CartProductInfo className='d-flex flex-column LAINFO'>
        <CartProductTitle onClick={()=>{nav("/product/"+_id)}}>{name}</CartProductTitle>
        <div>${price}</div>
        <div className='d-flex flex-row'>
          <CartProductBtn onClick={deleteProduct}>Eliminar</CartProductBtn>
            <label for="cantidad">Cantidad: </label>
            <div style={{"margin-left":"10px"}} name='cantidad'>{amount}</div>
        </div>
      </CartProductInfo>
    </CartCard>
  );
};
