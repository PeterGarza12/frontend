import styled from "styled-components";
import { Container, Row } from "reactstrap";

export const MainContainer = styled(Container)`
  background-image: url(${(props) => props.bgImg});
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-color: #5a5a5a;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


export const RowAfterHeader = styled(Row)`
margin-top: 85px;
`;


export const RowFooter = styled(Row)`
margin-top: auto;
`;
