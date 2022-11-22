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
border: 1px solid #ff2929;
border-radius: 40px;
color: #ff2929;
text-decoration: none;
text-align: center;
padding: 7px 13px;
background: transparent;
margin-top: 40px;
margin-bottom: 40px;
width: 100%;
transition: all 300ms;

&:hover{
  border: 1px solid #ff2929;
  border-radius: 40px;
  color: white;
  text-decoration: none;
  padding: 7px 13px;
  background: #ff2929;
  text-align: center;
}
`;

export const BtnEdit = styled.button`
border: none;
border-radius: 40px;
color: white;
text-decoration: none;
text-align: center;
padding: 7px 13px;
background: black;
margin-top: 40px;
margin-bottom: 40px;
width: 100%;
transition: all 300ms;

&:hover{
  border: none;
  border-radius: 40px;
  color: white;
  text-decoration: none;
  padding: 7px 13px;
  background: #ff2929;
  text-align: center;
}
`;

export const Proof = styled.input`
border: none;
border-bottom: 1px solid black;
margin-top: 20px;
transition: all 200ms;

&:hover, &:focus{
  outline: none;
  border: none;
  border-bottom: 1px solid #ff2929;
}
`;
