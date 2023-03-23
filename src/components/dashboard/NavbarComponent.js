import { Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';



function NavbarComponent() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
					<Link to="/Inicio" className='Link'>
          <Nav.Link href="/Inicio">inicio</Nav.Link>
						</Link>
						<Link to="/Ajustes" className='Link'>
            <Nav.Link href="/Ajustes">ajustes</Nav.Link>
						</Link>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
						<Link to="/NavbarVideo" className='Link'>
            <Nav.Link href="/NavbarVideo">Video</Nav.Link>
						</Link>
						<Link to="/Statistics" className='Link'>
            <Nav.Link href="/Statistics">Estadisticas</Nav.Link>
						</Link>
						<Link to="/Notification" className='Link'>
            <Nav.Link href="/Notification">notificaciones</Nav.Link>
						</Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
<Offcanvas.Header closeButton>
  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    Offcanvas
  </Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
  <Nav className="justify-content-end flex-grow-1 pe-">
  <Nav.Link href="/Inicio">inicio</Nav.Link>
            <Nav.Link href="/Ajustes">ajustes</Nav.Link>
            <Nav.Link href="/NavbarVideo">video</Nav.Link>
            <Nav.Link href="/Statistics">Estadisticas</Nav.Link>
            <Nav.Link href="/Notification">notificaciones</Nav.Link>
  
  </Nav>
  
</Offcanvas.Body>
</Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;

