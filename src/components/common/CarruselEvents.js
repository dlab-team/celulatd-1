import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';



const CarouselEvents = ({ events }) => {
  return (
    <Container>
    <Row>
      <Col>
        <Carousel interval={null} indicators={false}>
          {events.map(event => (
            <Carousel.Item key={event.id} className="d-flex justify-content-center">
              <div className="mx-3" style={{ width: "33%" }}>
                <h3>{event.summary}</h3>
                <p>{new Date(event.start.dateTime).toLocaleString()}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  </Container>
  );
};

export default CarouselEvents;