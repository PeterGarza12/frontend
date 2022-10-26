import styled from 'styled-components';

export const LabelForm = styled.label`
display: block;
font-size: 16px;
color: black;
margin-top: 35px;
margin-bottom: 15px;
text-align: left;
`;

export const BtnForm = styled.button`
border: 1px solid #5c7de9;
border-radius: 40px;
color: #5c7de9;
text-decoration: none;
text-align: center;
padding: 7px 13px;
background: transparent;
margin-top: 40px;
margin-bottom: 40px;
width: 100%;

&:hover{
  border: 1px solid #5c7de9;
  border-radius: 40px;
  color: white;
  text-decoration: none;
  padding: 7px 13px;
  background: #5c7de9;
  text-align: center;
}
`;

export const Proof = styled.input`
border: none;
border-bottom: 1px solid black;
margin-top: 20px;

&:hover, &:focus{
  outline: none;
  border: none;
  border-bottom: 1px solid #5c7de9;
}
`;
