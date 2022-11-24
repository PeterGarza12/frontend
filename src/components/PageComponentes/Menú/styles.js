import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Container } from "reactstrap";

export const ContainerMenu = styled(Container)`
height: 300px;
background-color: #753232;
color: white;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 0px;
margin-top: 40px;
font-variant-caps: all-small-caps;
margin-bottom: 20px;
`;

export const H3Prueba = styled.div`
font-size: 38px;
font-weight: bold;
padding-top: 80px;
transition: all 300ms ease;
&:hover{
  cursor: pointer;
  transform: scale(1.05);

}
`;

//Estilos para la carta de la categoría en sí
export const CategoryCard = styled(Link)`
background-color: white;
text-decoration: none;
display: flex;
flex-direction: column;
border-radius: 9px;
box-shadow: 0  0 10px 0 gray;
padding: 10px;
margin-right: 0px;
margin-left: 40px;
transition: all 300ms ease;

&:hover{
  cursor: pointer;
  transform: scale(1.04);
  transition-timing-function: linear;
}

&:hover img{
  opacity: 0.8;
}

&:hover div{
  color: #971e1e;
}
`;

export const CategoryImage = styled.img`
width: 190px;
height: 120px;
margin-top: 10px;
border-radius: 9px 9px 0px 0px;
transition: all 300ms ease;

`;

export const CategoryTitle = styled.div`
font-size: 25px;
font-weight: bold;
color: black;
margin-bottom: 10px;
border-top: 1px solid #d2d2d2;
padding-top: 10px;
margin-top: 5px;
transition: all 300ms ease;

`;
