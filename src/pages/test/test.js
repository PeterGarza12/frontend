import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import ListProductsComponent from "../../components/PageComponentes/productList/productlist";


function Test(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >

      <ListProductsComponent></ListProductsComponent>

    </View>
  );
}

export default Test;
