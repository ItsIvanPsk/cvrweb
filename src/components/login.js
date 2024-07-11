import React from 'react';
import { Container, Row, Col, Form, Button, FormCheck } from 'react-bootstrap';

const login = () => {
  return (
    <Container className='mb-5 mt-5'>
      <Row className="justify-content-md-center">
        <Col md="4">
          <h1 className="text-center">Inicio de sesión</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Introduce tu email" className='mt-3 mb-3' />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Introduce tu password" className='mt-3 mb-3' />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-45 me-3 mt-3">
              Iniciar sesión
            </Button>
            <Button variant="primary" type="submit" className="w-45 mt-3">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default login;
