import React, { useState } from 'react';
import {
  HeaderComp,
  TopNav,
  TopNavLink,
  TopNavSearchBar,
  TopNavSearchButton,
  HoverDropdown,
  LoginBtn,
  RegBtn,
  HeaderImg,
  CartBtn
} from './styles';
import { Container, Navbar, CardImg, Row, Col, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import logo from "../../../res/logoheader.png"
import { useNavigate } from "react-router-dom";
import store2 from 'store2';

export const Header = ({ theme, items, logged, searchbar, username, role }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = (e)=>{
    setDropdownOpen(!dropdownOpen);
  }

  const hideDropdown = e => {
    setDropdownOpen(false);
  }

  let nav = useNavigate();

  return (
    <HeaderComp>
    <TopNav>
      <Container fluid>
        <Row className='d-flex justify-content-around'>
          <Col md="10" className='d-flex align-items-center float-left'>

          <Container>
            <TopNavLink onClick={()=>{nav("/")}}>
              <HeaderImg
              className="col-12"
              alt="Logo"
              src={logo}
              />
            </TopNavLink>

            {items.map((x, i) => (
              <TopNavLink
                key={i}
                href={x.link}
              >
                {x.text}
              </TopNavLink>
            ))}

            <TopNavLink onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <HoverDropdown isOpen={dropdownOpen}  >
                  <DropdownToggle nav caret onClick={()=>{nav("/menu/1"); window.location.reload()}}>Menú</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={()=>{nav("/menu/1"); window.location.reload()}}>Carne</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={()=>{nav("/menu/2"); window.location.reload()}}>Hamburguesas</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={()=>{nav("/menu/3"); window.location.reload()}}>Tacos</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={()=>{nav("/menu/4"); window.location.reload()}}>Bebidas</DropdownItem>
                  </DropdownMenu>
              </HoverDropdown>
            </TopNavLink>

            {role.includes("admin") ? (
            <TopNavLink
                onClick={()=>{nav("/reportByUser")}}
              >
                Reportes
              </TopNavLink>
            ):(<div></div>)}

          {searchbar ? (
            <Col md="2">
              <Container>
                <Row>
                  <Col md="8">
                    <TopNavSearchBar></TopNavSearchBar>
                  </Col>
                  <Col md="2">
                    <TopNavSearchButton>Buscar</TopNavSearchButton>
                  </Col>
                </Row>
              </Container>
            </Col>
          ) : (
            <Container></Container>
          )}
          </Container>

          {logged ? (
            <Container className='d-flex justify-content-end'>
              <CartBtn onClick={()=>{nav("/cart")}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </CartBtn>
              <LoginBtn onClick={()=>{nav("/profile")}}>
                {username}
              </LoginBtn>
              <RegBtn onClick={()=>{
                store2.clearAll();
                nav("/login")}}>
                Cerrar sesión
              </RegBtn>
            </Container>
          ) : (
            <Container className='d-flex justify-content-end'>
              <LoginBtn onClick={()=>{nav("/login")}}>
                Iniciar sesión
              </LoginBtn>
              <RegBtn onClick={()=>{nav("/register")}}>
                Registrate
              </RegBtn>
            </Container>
          )}
          </Col>
        </Row>
      </Container>
    </TopNav>
    </HeaderComp>
  );
};

