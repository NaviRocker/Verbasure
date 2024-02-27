import React from 'react';
import {  Row, Col } from 'reactstrap';
import './Starter.css'

export default function ContactUs() {

  return (
    <>

<Row className="mt-5">
        <Col>
        <h1 className='main-title text-uppercase text-center '>Contact Us</h1>
          <p className="contact-description">
            Have questions or need assistance? Reach out to us using the details below.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <div className="contact-card">
            <h3>Sivamayuori Premnath</h3>
            <p className="contact-info">Phone: 077 250 8693</p>
            <p className="contact-info">Email: sivamayuori@example.com</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="contact-card">
            <h3>Keshani Ekanayake</h3>
            <p className="contact-info">Phone: 071 537 6148</p>
            <p className="contact-info">Email: keshani@example.com</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="contact-card">
            <h3>Thara Pieris</h3>
            <p className="contact-info">Phone: 070 425 1402</p>
            <p className="contact-info">Email: thara@example.com</p>
          </div>
        </Col>
      </Row>
 

    </>
  )
};

