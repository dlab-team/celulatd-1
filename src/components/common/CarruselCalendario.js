import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../../scss/components/landing/_carrusel.css';
   


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
      <Row  className="justify-content-center">
        <Col>
          <Carousel interval={null} indicators={false}>
            {events.reduce((groups, event, index) => {
              if (index % 3 === 0) {
                groups.push(events.slice(index, index + 3));
              }
              return groups;
            }, []).map((group, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-between w-100">
                  {group.map(event => (
                    <div key={event.id} className="mx-3 title-date-container" style={{ flex: 1 }}>
                      <h3>{event.summary}</h3>
                      <p>{new Date(event.start.dateTime).toLocaleString()}</p>
                    </div>
                  ))}
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