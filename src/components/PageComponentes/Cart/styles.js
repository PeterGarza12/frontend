import styled from "styled-components";

export const ContainerCart = styled.div`
display: flex;
flex-direction: column;
color: white;
font-variant-caps: all-small-caps;
margin-bottom: 20px;
`;

export const TotalSection = styled.div`
background-color: white;
color: black;
max-height: 200px;
padding: 15px;
border-radius: 8px;
font-variant-caps: all-small-caps;
box-shadow: 0  0 10px 0 gray;
justify-content: center;
align-items: center;
margin: 20px;
`;

export const TitleCart = styled.div`
font-size: 38px;
font-weight: bold;
padding-top: 30px;
border-bottom: 1px solid gray;
text-align: left;
`;

export const TotalCart = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 30px;
  text-align: left;
`;

export const PayCartBtn = styled.button`
margin-top: 20px;
margin-right: 10px;
background: #753232;
border: none;
padding: 8px;
max-width: 140px;
border-radius: 15px;
color: white;
min-width: 50%;
transition: all 300ms;

&:hover{
  opacity: 0.8;
}
`;

//Estilos para la carta de la categoría en sí
export const CartCard = styled.div`
border: none;
margin-top: 20px;
padding: 15px;
transition: all 300ms ease;
display: flex;
flex-direction: row;
justify-content: start;
background-color: #753232;
border-radius: 8px;
`;

export const CartProductInfo = styled.div`
margin-left: 10px;
align-items: flex-start;
justify-content: space-between;
`;

export const CartProductImage = styled.img`
width: 190px;
height: 120px;
border-radius: 9px 0px 0px 9px;
transition: all 250ms ease;

&:hover{
  cursor: pointer;
  transform: scale(1.05);
}
`;

export const CartProductTitle = styled.div`
font-size: 25px;
font-weight: bold;
color: white;
`;

export const CartProductBtn = styled.button`
border: none;
margin-right: 10px;
background-color: black ;
color: white;
border-radius: 8px;
transition: all 300ms;

&:hover{
  background-color: white;
  color:black;
}
`;
