import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export const Content = (props) => {
  return (
    <Col className='d-flex flex-column align-items-center justify-content-center'>{props.children}</Col>
  );
};
