import React, { Component } from 'react';
import HistoriaUsuarios from '../../../utils/HistoriasUsuarios';
import { Container,  Carousel } from 'react-bootstrap';

 import '../../../scss/components/landing/body/_carrusel1.scss'; 

class CarruselStories extends Component {
  render() {
    const { items } = this.props; // obtener los datos como propiedades del componente
    return (
      <Container className="justify-content-center carousel1">
      
          <Carousel interval={null} indicators={true} >
            {HistoriaUsuarios.reduce((groups, usuario, index) => {
              if (index < 3 ) {
                groups.push(HistoriaUsuarios.slice(index, index + 1));
              }
              return groups;
            }, []).map((group, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-between w-100">
                  {group.map(usuario => (
                    <div key={usuario.nombre} className="mx-3 title-date-container " style={{ flex: 1 }}>
                      <h3>{usuario.nombre}</h3>
                      <p>Edad: {usuario.edad}</p>
                      <p>{usuario.historia}</p>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
       
    </Container>
    
    );
  }
}

export default CarruselStories