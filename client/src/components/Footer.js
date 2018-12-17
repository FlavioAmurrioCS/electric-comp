import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const Footer = () => {
  return (
    <Container className="footer" fluid={true}>
      <Row className="d-none d-lg-block d-xl-block">
        <Col md={6}>
          <h5 class="text-uppercase">Footer Content</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
        </Col>
        <Col md={3}>
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <div class="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            MDBootstrap.com
          </a>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
