import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const Content = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className='d-flex justify-content-center'>{props.children}</Col>
      </Row>
    </Container>
  );
};
