import styled from "styled-components";

export const FooterComp = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: #fe9999;
  text-align: center;
  margin-top: 50px;
`;

export const TopNav = styled.div`
  width: 100%;
  background-color: black ;
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
  transition: all 300ms;

  &:hover {
    background-color:  #d9d9d9 ;
    color: black;
  }
  &active {
    background-color:  #d9d9d9 ;
    color: white;
  }
`;
