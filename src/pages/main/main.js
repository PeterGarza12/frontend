import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import ListProductsComponent from "../../components/PageComponentes/productList/productlist";
import MenuC from "../../components/PageComponentes/Menú";


function Main(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >

      <ListProductsComponent></ListProductsComponent>
      <MenuC></MenuC>

    </View>
  );
}

export default Main;
