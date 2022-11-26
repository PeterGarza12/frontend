import { CardImg, Dropdown, Navbar } from 'reactstrap';
import styled from "styled-components";

export const HeaderComp = styled(Navbar)`
  position: absolute;
  width: 100%;
  top: 0;
  background-color: black;
  color: white;
  text-align: center;
  z-index: 2;
`;

export const TopNav = styled.div`
  background-color: black;
  width: 100%;

  `;

export const TopNavLink = styled.a`
  float: left;
  color: white ;
  text-align: center;
  cursor: pointer;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  transition: all 300ms;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    background-color: #d9d9d9 ;
    color: black;
  }
`;

export const RegBtn = styled.a`
  float: right;
  background-color: white;
  color: black ;
  text-align: center;
  cursor: pointer;
  padding: 10px 10px;
  text-decoration: none;
  font-size: 17px;
  transition: all 300ms;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    background-color: #ff2929 ;
    color: white;
  }
`;

export const LoginBtn = styled.a`
  float: right;
  background-color: transparent;
  color: white ;
  border: white 2px solid;
  text-align: center;
  cursor: pointer;
  padding: 10px 10px;
  text-decoration: none;
  font-size: 17px;
  transition: all 300ms;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    background-color: #d9d9d9 ;
    color: black;
  }
`;

export const TopNavSearchBar = styled.input.attrs({ type: 'text' })`
  float: right;
  padding: 6px;
  border: none;
  margin-top: 8px;
  margin-right: 55px;
  font-size: 17px;
`;

export const TopNavSearchButton = styled.button`
  float: right;
  padding: 6px 10px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
`;

export const HoverDropdown = styled(Dropdown)`
  display: block;
`;

export const HeaderImg = styled(CardImg)`
  max-width: 100%;
  display: block;
  height: 30px;
`;

export const CartBtn = styled.a`
  float: right;
  background-color: transparent;
  color: white ;
  border: none;
  text-align: center;
  cursor: pointer;
  padding: 10px 10px;
  text-decoration: none;
  font-size: 17px;
  transition: all 300ms;
  border-radius: 8px;
  margin-left: 5px;
  margin-right: 5px;

  &:hover {
    background-color: #d9d9d9 ;
    color: black;
  }
`;
