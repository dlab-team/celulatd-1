import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from '../NavbarComponent';
import '../../../scssWeb/main.css';



function NavbarVideo() {

  return (
    <>

      <NavbarComponent />
      <Navbar variant="light" className='mx-3 navbarvideo'>
        <Container>
          <Link to="/VideoUploader" className='Link'>
            <Nav.Link href="/VideoUploader"><h2>Subir video</h2></Nav.Link>
          </Link>
          <Link to="/ComponetVideo" className='Link'>
            <Nav.Link href="/ComponetVideo"><h2>Editar Videos</h2></Nav.Link>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarVideo;

