import { Row } from 'reactstrap';
import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: #753232;
  font-variant-caps: all-small-caps;
  border-radius: 20px;
  box-shadow: 0  0 10px 0 black;
  position: relative;
  display: flex;
  flex-direction: row;

`;

export const CardContainer = styled.div`
  margin-bottom: 20px;
`;

export const CatTitle = styled.div`
  color: white;
  font-size: 50px;
  font-variant-caps: all-small-caps;
  font-weight: bold;
  font-family: var(--bs-body-font-family);
`;
