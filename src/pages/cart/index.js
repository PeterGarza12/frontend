import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import CartC from "../../components/PageComponentes/Cart/cart";


function Cart(){

  return(
    <View banner= {''} header = {'Header'} theme={MainTheme} >
      <CartC></CartC>
    </View>
  );
}

export default Cart;
