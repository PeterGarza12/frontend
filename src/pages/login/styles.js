import styled from "styled-components";

export const ContenedorLogin = styled.div`
background-color: white;
border-radius: 20px;
box-shadow: 0  0 10px 0 gray;
padding: 30px;
`;

export const BtnLink = styled.button`
border: none;
border-bottom: 1px solid black;
background-color: white;
transition: all 300ms;
margin-bottom: 15px;

&:hover{
  background: none;
  color: #ff2929;
  border-bottom: 1px solid #ff2929;
}
`;
