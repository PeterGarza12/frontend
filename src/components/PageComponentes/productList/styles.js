import styled from "styled-components";
import { Row } from 'reactstrap';

export const ListContainer = styled.div`
  color: #fe9999;
  text-align: center;
  padding: 0px;
  display: flex;
  background-color: #753232;
  height: 300px;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
  margin-bottom: 200px;
  width: 100%;
`;

export const ListTitle = styled.span`
font-size: 30px;
font-weight: bold;
color: white;;
text-align: left;
display: flex;
justify-content: start;
align-items: start;
font-variant-caps: all-small-caps;
`;

export const ListTitleBottom = styled.span`
font-size: 40px;
font-weight: bold;
color: white;;
text-align: left;
display: flex;
justify-content: start;
align-items: start;
font-variant-caps: all-small-caps;
`;

export const ListImg = styled.img`
position: relative;
`;

export const DetailCont = styled.div`
position: relative;
text-align:left;
display: flex;
flex-direction: column;
align-items: start;
justify-content: space-between;
margin-right: 50px;
`;

export const ProductLister = styled(Row)`
position: relative;
display: flex;
flex-direction: row;
justify-content: space-around;
`;


export const ImgContainer = styled(Row)`
width: 300px;
overflow: hidden;
`;

export const TitleContainer = styled(Row)`
padding: 20px;
width: 100%;
height: 100%;
`;


