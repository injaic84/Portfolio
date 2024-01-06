import React from 'react';
import carlosInjai from '../images/carlosInjai.jpg';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

 const Hero = () => {
  return (
   <section className='hero'>
      <Container className='heroImage'>
            <Image src={carlosInjai} rounded/>  
      </Container>  

      <Container className='heroName-jobRole'>  
                  <h1>Carlos Injai</h1>
                  <br/>
                  <h2>Front End Developer</h2>
                  <h2>Front End Developer</h2>
                  <h2>Web developer</h2>
      </Container>           
    </section>
  );
}
export default Hero
