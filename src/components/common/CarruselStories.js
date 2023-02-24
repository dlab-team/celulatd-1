import React, { Component } from 'react';

import CarouselEvents from './CarouselEvents';
    
import '../styled-components/components/CarouselStyle.css';

class CarruselStories extends Component {
    state = {
      events: []
    };
    render() {
      return (
        <div>
          <CarouselEvents/>
        </div>
      );
    }
  }
  export default CarruselStories;