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

export const TotalCart = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 30px;
  text-align: left;
`;

export const PayCartBtn = styled.button`
margin-top: 20px;
border: 1px solid black;
margin-right: 10px;
background: none;
padding: 5px;
max-width: 140px;
border-radius: 15px;

&:hover{
  color: black;
  border: 1px solid #ff9129;
  background: #ff9129;

}
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
transition: all 250ms ease;

&:hover{
  cursor: pointer;
  transform: scale(1.05);
}
`;

export const CartProductTitle = styled.div`
font-size: 25px;
font-weight: bold;
color: black;
`;

export const CartProductBtn = styled.button`
border: none;
border-bottom: 1px solid black;
margin-right: 10px;

&:hover{
  color: #ff2929;
  border-bottom: 1px solid #ff2929;
  background: none;
}
`;
