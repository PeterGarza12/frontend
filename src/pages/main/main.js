import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import ListProductsComponent from "../../components/PageComponentes/productList/productlist";
import MenuC from "../../components/PageComponentes/Menú";
import Slider from "../../components/PageComponentes/Slider/slider";


function Main(){

  return(
    <View banner= {''} header = {'Header'} logged = {false} theme={MainTheme} >

      <ListProductsComponent></ListProductsComponent>
      <Slider></Slider>
      <MenuC></MenuC>

    </View>
  );
}

export default Main;
