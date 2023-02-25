import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../../scss/components/_carrusel.css';
   


class CarruselCalendario extends Component {
  state = {
    events: []
  };

  componentDidMount() {
    const API_KEY = 'AIzaSyDCtEVPUK8m7rLK9kchfGifpEdaGk8Zxk8';
    const CALENDAR_ID = 'fc879f23a68641ddcac87c4b24451c23c515924f8d29bef7592a25b5b9cbcd2e@group.calendar.google.com';

    const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

    axios.get(url)
      .then(response => {
        const events = response.data.items.filter(event => {
          const eventDate = new Date(event.start.dateTime);
          return eventDate >= new Date();
        });

        console.log("Número de eventos cargados:", events.length);
        this.setState({ events });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { events } = this.state;

    return (
      <Container>
      <Row>
        <Col>
          <Carousel interval={null} indicators={false} slide={3} wrap={false}>
            {events.map(event => (
              <Carousel.Item key={event.id}>
                <div className="title-date-container">
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
  }
}

export default CarruselCalendario;