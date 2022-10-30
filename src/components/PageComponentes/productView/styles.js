import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Row, Col} from 'reactstrap';

export const ProductContainer = styled(Container)`
display: flex;
border-radius: 20px;
width: 100%;
margin-bottom: 20px;
background-color: #753232;

`;

export const MainContainer = styled(Container)`
display: flex;
border-radius: 20px;
width: 100%;
margin-bottom: 20px;
`;

export const ImgContainer = styled(Container)`
  background-color: #753232;
  color: white;
  font-variant-caps: all-small-caps;
  padding: 20px;
  width: fit-content;

`;

export const InfoContainer = styled(Container)`
background-color: white;
font-variant-caps: all-small-caps;
box-shadow: 0  0 10px 0 gray;
border-radius: 20px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;

export const ProductBtn = styled.button`
background-color: black;
color: white;
padding: 8px;
border-radius: 8px;
transition: all 300ms;
margin: 10px;
border: none;
&:hover{
  color: black;
  background-color: #d9d9d9;
}
`;


export const ProductText = styled.div`
font-size: 30px;
margin: 20px;
font-weight: bold;
`;

export const ProductDesc = styled.span`
font-size: 20px;
`;

export const ProductTitle = styled.div`
color: white;
margin-bottom: 20px;
font-size: 55px;
font-weight: bold;
`;

