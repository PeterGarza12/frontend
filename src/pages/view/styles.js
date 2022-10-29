import styled from "styled-components";
import { Container, Row } from "reactstrap";

export const MainContainer = styled(Container)`
  background-image: url(${(props) => props.bgImg});
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const ColAfterHeader = styled(Row)`
margin-top: 55px;
`;


export const RowFooter = styled(Row)`
margin-top: auto;
width: 100wh;
`;
