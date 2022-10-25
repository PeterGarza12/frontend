import styled from 'styled-components';

export const LabelForm = styled.label`
display: block;
font-size: 16px;
color: black;
margin-top: 15px;
margin-bottom: 15px;
`;

export const BtnForm = styled.button`
border: 1px solid #5c7de9;
border-radius: 40px;
color: #5c7de9;
text-decoration: none;
text-align: center;
padding: 7px 13px;
background: transparent;
margin-top: 20px;
margin-bottom: 20px;
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

&:hover, &:focus{
  outline: none;
  border: none;
  border-bottom: 1px solid #5c7de9;
}
`;
