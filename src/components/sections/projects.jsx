import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import AMGL from '../images/amgl.jpg'
import academiaBjjLifestyle from '../images/academiaBjjLifestyle.jpg'
import barbeariaSimplicidade from '../images/barbeariaSimplicidade.jpg'
import EdyTuka from '../images/EdyTuka.jpg'

 const Projects = () => {
  return (
    <section className='projects'>
        <Container>
              <Card style={{ width: '20rem' }}>
                <Card.Img className='cardImg' variant= 'amgl' src={AMGL} />
                    <Card.Title className='title'> AMGL BJJ Academy</Card.Title>
                      <Card.Body>
                        <Card.Text className='text'>
                          To be confirmed
                        </Card.Text>
                      </Card.Body>
              </Card>
        </Container>
                          <Container> 
                                  <Card style={{ width: '20rem' }}>
                                    <Card.Img className='academiaBjj' variant="academiaBjjLifestyle" src={academiaBjjLifestyle} />
                                      <Card.Title className='title'> Acdemia BJJ Lifestyle</Card.Title>
                                        <Card.Body>
                                          <Card.Text className='text'>
                                            To be confirmed
                                          </Card.Text>
                                      </Card.Body>
                                  </Card>
                            </Container> 
              <Container>
              <Card style={{ width: '20rem' }}>
                <Card.Img className='barbearia' variant="BarbeariaSimplicidade" src={barbeariaSimplicidade} />
                        <Card.Title className='title'>Barbearia Simplicidade</Card.Title>
                          <Card.Body>
                            <Card.Text className='text'>
                              To be confirmed
                            </Card.Text>
                          </Card.Body>
                        </Card>
              </Container>
                  <Container>
                      <Card style={{ width: '20rem' }}>
                        <Card.Img className='edytuka' variant="EdyTuka" src={EdyTuka} />
                                <Card.Title className='title'>Edy & Tuka wedding</Card.Title>
                                  <Card.Body>
                                    <Card.Text className='text'>
                                      To be confirmed
                                    </Card.Text>
                                  </Card.Body>
                      </Card>
                  </Container>
    </section>
  )
}

export default Projects