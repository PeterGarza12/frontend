import React from "react";
import { View } from "../view/view";
import { MainTheme } from "../../utils/colors";
import ListProductsComponent from "../../components/PageComponentes/productList/productlist";
import MenuC from "../../components/PageComponentes/Menú";
import Slider from "../../components/PageComponentes/Slider/slider";


function Main(){

  return(
    <View banner= {''} header = {'Header'} theme={MainTheme}>

      <ListProductsComponent text={'Productos'} text2={'Populares'} type={0}></ListProductsComponent>
      <Slider></Slider>
      <MenuC></MenuC>
      <ListProductsComponent text={''} text2={'Sugerencias'} type={1}></ListProductsComponent>

    </View>

  );
}

export default Main;
