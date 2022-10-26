import styled from "styled-components";

export const FooterComp = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fe9999;
  color: #fe9999;
  text-align: center;
`;

export const TopNav = styled.div`
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
