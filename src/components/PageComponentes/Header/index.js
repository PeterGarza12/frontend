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
import { Container, CardImg, Row, Col, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import logo from "../../../res/logo.png"

export const Header = ({ theme, items, logged, searchbar }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const showDropdown = (e)=>{
    setDropdownOpen(!dropdownOpen);
  }

  const hideDropdown = e => {
    setDropdownOpen(false);
  }

  return (
    <HeaderComp>
    <TopNav>
      <Container fluid>
        <Row className='d-flex justify-content-around'>
          <Col md="10" className='d-flex align-items-center float-left'>

          <Container>
            <TopNavLink href="/">
              <CardImg
              alt="Logo"
              src={logo}
              style={
                {
                  width: 50,
                  height: 30
                }
              }
              width="100%"/>
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
                  <DropdownToggle nav caret>Menú</DropdownToggle>
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
              <LoginBtn href='/login'>
                Iniciar sesión
              </LoginBtn>
              <RegBtn href='/register'>
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

