import React from 'react'
import Container from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

 const About = () => {
  return (
    <section id='about'>
      <Container>
        <Col>
                <h1>Who am I</h1>
                <p>Quick brief about me</p>
        </Col>
      </Container>
      
      <Container>
        <Col>  
                    Skills
            <li>HTML      CSS</li>
            <li>Node js   React js</li>
            <li>Python    Javascript</li>
            <li>GitHub    Figma</li>
        </Col>
      </Container>    
    </section>

    
  )
}

export default About