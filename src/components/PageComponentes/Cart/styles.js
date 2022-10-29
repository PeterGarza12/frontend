import styled from "styled-components";

export const ContainerCart = styled.div`
display: flex;
flex-direction: column;
color: black;
font-variant-caps: all-small-caps;
`;

export const TitleCart = styled.div`
font-size: 38px;
font-weight: bold;
padding-top: 30px;
border-bottom: 1px solid gray;
text-align: left;
`;

//Estilos para la carta de la categoría en sí
export const CartCard = styled.div`
border: none;
margin-top: 20px;
padding: 10px;
transition: all 300ms ease;
border-bottom: 1px solid #d2d2d2;
display: flex;
flex-direction: row;
justify-content: start;
`;

export const CartProductInfo = styled.div`
margin-left: 10px;
align-items: flex-start;
`;

export const CartProductImage = styled.img`
width: 190px;
height: 120px;
margin-top: 10px;
border-radius: 9px 0px 0px 9px;
`;

export const CartProductTitle = styled.div`
font-size: 25px;
font-weight: bold;
color: black;
`;
