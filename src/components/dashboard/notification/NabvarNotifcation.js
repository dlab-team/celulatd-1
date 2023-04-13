import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from '../NavbarComponent';
import '../../../scssWeb/main.css';



export default function NavbarNotification() {

  return (
    <>

      <NavbarComponent />
      <Navbar variant="light" className='mx-3 navbarvideo'>
        <Container>
          <Link to="/ListNotifications" className='Link'>
            <Nav.Link href="/ListNotifications"><p>Mensajes</p></Nav.Link>
          </Link>
          <Link to="/Notification" className='Link'>
            <Nav.Link href="/Notification"><p>Subir Mensajes</p></Nav.Link>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}



