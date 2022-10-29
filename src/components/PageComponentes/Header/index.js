import React, { useState } from 'react';
import {
  HeaderComp,
  TopNav,
  TopNavLink,
  TopNavSearchBar,
  TopNavSearchButton,
  HoverDropdown,
  LoginBtn,
  RegBtn
} from './styles';
import { Container, Navbar, CardImg, Row, Col, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import logo from "../../../res/logo.png"
import { useNavigate } from "react-router-dom";

export const Header = ({ theme, items, logged, searchbar }) => {
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
            <TopNavLink>
              <CardImg
              alt="Logo"
              src={logo}
              style={
                {
                  width: 50,
                  height: 30
                }
              }
              width="100%"
              onClick={()=>{nav("/")}}/>
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
                  <DropdownToggle nav caret onClick={()=>{nav("/menu")}}>Menú</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Tacos</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Hamburguesas</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Carne</DropdownItem>
                  </DropdownMenu>
              </HoverDropdown>
            </TopNavLink>

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
            <Container>Opiones para usuario loggeado</Container>
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

