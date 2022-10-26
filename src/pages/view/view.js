import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Content } from "../Content/content";
import Footer from "../../components/PageComponentes/Footer";

export const View = (props) => {

  return(
    <Container fluid>
      <Row>
        {
          props.header === 'Header' ? (
            <h1>Aquí iría el header</h1>
          ) : (
            <div></div>
          )
        }
      </Row>
      <Row>
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
      </Row>
      <Footer></Footer>
    </Container>
  );
};
