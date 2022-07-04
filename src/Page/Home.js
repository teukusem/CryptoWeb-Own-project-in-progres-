import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Container className="jumboTron">
        <Row>
          <Col className="textJumbotron">
            <h3 className="fw-bold">
              Belajar, Beli, Jual dan Investasi <br /> Bitcoin serta Aset Kripto <br /> dengan mudah dan aman.
            </h3>
            <br />
            <h5 className="fw-bold">Mulai investasi sekarang</h5>
          </Col>
          <Col className="">
            <img className="imageJumbo" src="https://www.tokocrypto.com/_nuxt/img/mockup2x.60205fe.png" alt="Image.png" />
          </Col>
        </Row>
      </Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave mt-2">
        <path
          fill=" #000080"
          fill-opacity="0.7"
          d="M0,128L40,122.7C80,117,160,107,240,122.7C320,139,400,181,480,186.7C560,192,640,160,720,165.3C800,171,880,213,960,202.7C1040,192,1120,128,1200,117.3C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
