import React from 'react';
import { Row, Col } from 'reactstrap';
export default function About() {

  return (
    <>

      <Row className="mt-5">
        <div className="container text-center p-3">

          <h1 className='main-title text-uppercase text-center '>About Us</h1>
          <h1 className="lead py-3">
            <strong>Welcome to "Verbasure", where language learning meets innovation!</strong>
          </h1>
          <hr className="my-4" />
          <h2 className='container bg-light rounded-4 py-4'>
            Welcome to Verba Sure, where innovation meets education! At Verba Sure,
            we believe in the power of interactive learning and gamification to enhance
            attention spans and foster effective language acquisition.
          </h2>
          <h2  className='container bg-light rounded-4 py-4'>
            Our solution is designed to evaluate interactive elements, employing a unique approach to
            self-regulated learning. Verba Sure focuses on teaching basic English language skills through
            engaging activities and dynamic content. We recognize the importance of a tailored and immersive
            learning experience, making Verba Sure the ideal tool for individuals seeking to enhance their
            language proficiency while enjoying the benefits of a self-paced, interactive educational journey.
            Join us in
            redefining language education through the lens of innovation and individualized learning at Verba Sure!
          </h2>
          <p className="lead py-5">
            <a className="btn btn-primary btn-lg" href="/contact" role="button">
              Contact Us
            </a>
          </p>

        </div>
      </Row>

    </>
  )
};

