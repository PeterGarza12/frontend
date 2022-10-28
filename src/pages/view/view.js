import React from "react";
import {Row, Col } from "reactstrap";
import { Content } from "../Content/content";
import { Header } from "../../components/PageComponentes/Header";
import Footer from "../../components/PageComponentes/Footer";
import { MainContainer, RowAfterHeader } from "./styles";
import { pageColors } from "../../utils/colors";

const navbaritems = [
  {
    text: 'Inicio',
    link: '/',
  }
];

export const View = (props) => {

  return(
    <MainContainer fluid bgImg = {pageColors[props.theme].bgImg}>

        <Row>
          {
            props.header === 'Header' ? (
              <Header theme={props.theme} items={navbaritems} logged ={props.logged}></Header>
            ) : (
              <div></div>
            )
          }
        </Row>
        <RowAfterHeader>
          <Col className="col-12" >
            {
              props.banner === 'Prueba' ? (
                <h3>Aquí iría algún elemento extra como un anuncio o algo así dependiendo en cuál página estemos</h3>
              ) : (
                <div></div>
              )
            }
            <Content>{props.children}</Content>
          </Col>
        </RowAfterHeader>
        <Footer></Footer>
    </MainContainer>
  );
};
