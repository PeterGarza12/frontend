import styled from "styled-components";
import { Container } from "reactstrap";

export const ContainerMenu = styled(Container)`
height: 300px;
background: linear-gradient(#a02a2a, white);
padding-top: 20px;
padding-bottom: 20px;
padding-right: 0px;
border-radius: 9px 9px 0 0;
margin-top: 40px;

`;

export const H3Prueba = styled.div`
font-size: 38px;
font-weight: bold;
padding-top: 80px;
&:hover{
  cursor: pointer;
  font-size: 42px;
  transition: 150ms;
}
`;

//Estilos para la carta de la categoría en sí
export const CategoryCard = styled.div`
background-color: white;
border-radius: 9px;
box-shadow: 0  0 10px 0 gray;
padding: 10px;
margin-right: 0px;
margin-left: 40px;

&:hover{
  background-color: #ffe4e4;
  cursor: pointer;
}

&:hover img{
  height: 140px;
  width: 210px;
  transition: 200ms;
  transition-timing-function: linear;
}

&:hover div{
  color: #d01111;
  font-size: 27px;
  transition: 200ms ease-in-out;
}
`;

export const CategoryImage = styled.img`
width: 190px;
height: 120px;
margin-top: 10px;
border-radius: 9px 9px 0px 0px;
`;

export const CategoryTitle = styled.div`
font-size: 25px;
font-weight: bold;
color: #971e1e;
margin-bottom: 10px;
border-top: 1px solid #d2d2d2;
padding-top: 10px;
margin-top: 5px;
`;
