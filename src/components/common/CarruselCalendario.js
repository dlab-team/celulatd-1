import React, { Component } from 'react';
import axios from 'axios';
import CarouselEvents from './CarouselEvents';
    
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

        this.setState({ events });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <CarouselEvents events={this.state.events} />
      </div>
    );
  }
}

export default CarruselCalendario;