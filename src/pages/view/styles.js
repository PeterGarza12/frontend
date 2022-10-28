import styled from "styled-components";
import { Container, Row } from "reactstrap";


export const MainContainer = styled(Container)`
  background-image: url(${(props) => props.bgImg});
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const RowAfterHeader = styled(Row)`
margin-top: 70px;
`;
