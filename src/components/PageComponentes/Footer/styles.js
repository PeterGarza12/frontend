import styled from "styled-components";

export const FooterComp = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ff2929;
  color: #fe9999;
  text-align: center;

`;

export const TopNav = styled.div`
  width: 100%;
  background-color: #ff2929 ;
  overflow: hidden;
`;

export const TopNavLink = styled.a`
  float: right;
  color: white ;
  text-align: center;
  cursor: pointer;
  padding: 24px 16px;
  text-decoration: none;
  font-size: 17px;


  &:hover {
    background-color: #fe9999 ;
    color: black;
  }
  &active {
    background-color: #fe9999 ;
    color: white;
  }
`;
