import { Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarComponent from '../NavbarComponent';



function NavbarVideo() {

  return (
    <>
 
  <NavbarComponent/>
  <Navbar bg="light" variant="light">
        <Container>
        <Link to="/VideoUploader" className='Link'>
          <Nav.Link href="/VideoUploader">Subir video</Nav.Link>
						</Link>
						<Link to="/ComponetVideo" className='Link'>
            <Nav.Link href="/ComponetVideo">Editar Videos</Nav.Link>
						</Link>
        </Container>
      </Navbar>
        </>
  );
}

export default NavbarVideo;

