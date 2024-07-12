import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="4">
            <h5>Sobre Nosotros</h5>
            <p>
              Somos una organización dedicada a ofrecer experiencias de realidad virtual y hacer divulgación sobre las mismas. Nuestro objetivo es mejorar la calidad de la enseñanza haciendo uso de experiencias de realidad virtual en los centros.
            </p>
          </Col>
          <Col md="4">
            <h5>Navegación</h5>
            <ul className="list-unstyled">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Experiencias</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li><a href="mailto:info@empresa.com">vrieti@iesesteveterradas.cat</a></li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p>&copy; 2024 Club VR IETI. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
