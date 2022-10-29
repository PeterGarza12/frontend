import React from "react";
import { Row } from "reactstrap";
//import { Content } from "../Content/content";
import { Header } from "../../components/PageComponentes/Header";
import Footer from "../../components/PageComponentes/Footer";
import { MainContainer, RowAfterHeader, RowFooter } from "./styles";
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

      <RowAfterHeader className="Col after header">
        {
          props.banner === 'Prueba' ? (
            <h3>Aquí iría algún elemento extra como un anuncio o algo así dependiendo en cuál página estemos</h3>
          ) : (
            <div></div>
          )
        }
        <div className='d-flex flex-column align-items-center justify-content-center'>{props.children}</div>
      </RowAfterHeader>

      <RowFooter>
        <Footer></Footer>
      </RowFooter>

    </MainContainer>
  );
};
