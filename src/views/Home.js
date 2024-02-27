// src/components/Homepage.js

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImage from '../assets/avatars/heroImage.png';
import activity1img from '../assets/avatars/activity1img.jpg';
import activity2img from '../assets/avatars/activity2img.png';
import activity3img from '../assets/avatars/activity3img.png';


import './Starter.css';

export default function Homepage() {
  return (
    <Container>
      {/* Hero Section */}
      <Row className="hero-section">
        <Col>
        <h1 style={{fontFamily:"Nunito,sans-serif"  }} className='title-text text-center text-black rounded-4 mt-3'>Welcome to Verbasure</h1>
          <img src={heroImage} className='rounded-4' style={{ width: "100%" }} alt="Hero Section" />
          <p className="text-center text-blue" style={{ fontSize: "22px", marginTop: "30px" }}>
            An accessible and engaging English language learning experience for all
          </p>
          <p className="text-center text-blue" style={{ fontSize: "20px", marginTop: "30px", marginLeft: "10%", marginRight: "10%" }}>
            In verbasure, you get the chance to test your English knowledge in a fun and interactive way.
            You will have 3 different story lines where you will be different tasks to complete. Let's dive in!
          </p>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="feature-section mt-5">
        {/* Activity 1 */}
        <Col md={6} className='p-4'>
          <img src={activity1img} className='rounded-4' style={{ width: "100%" }} alt="Activity 1" />
          </Col>
          <Col md={6} className='p-4' style={{ justifyContent: "center"}}>
          <div className="feature-content">
            <h2>Story Line 1</h2>
            <h3>Meetup with friends</h3>
            <p>
              Engage in reading and listening activities along with small quizes to test your knowledge throughout this interesting get-together.
            </p>
          </div>
        </Col>

        {/* Activity 2 */}
        <Col md={6} className='p-4'>
          <div className="feature-content">
            <h2>Story Line 2</h2>
            <h3>Travel Sri Lanka</h3>
            <p>
              Explore the wonderful country of ours, and learn more about the uniqueness of different cities and villages in Sri Lanka, 
              all the while engaging in reading and listening activities.
            </p>
          </div>
          </Col>
          <Col md={6} className='p-4'>
          <img src={activity2img} className='rounded-4' style={{ width: "100%" }} alt="Activity 2" />
        </Col>
     

      {/* Activity 3 */}
      
        <Col md={6} className='p-4'>
          <img src={activity3img} className='rounded-4' style={{ width: "100%" }} alt="Activity 3" />
          </Col>
          <Col md={6} className='p-4'>
          <div className="feature-content">
            <h2>Story Line 3</h2>
            <h3>A day at university</h3>
            <p>
              Expierience the university while learning English. Build friendships, Explore learning opportunities, and engage in fun activities as well.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
