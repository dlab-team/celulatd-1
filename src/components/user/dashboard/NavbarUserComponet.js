import { Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';



function NavbarUserComponent() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
					<Link to="/InicioUser" className='Link'>
          <Nav.Link href="/InicioUser">inicio</Nav.Link>
						</Link>
						<Link to="/SettingsUser" className='Link'>
            <Nav.Link href="/SettingsUser">ajustes</Nav.Link>
						</Link>
            <Navbar.Brand href="/Inicio">Desafios Latam</Navbar.Brand>
						<Link to="/ComponetVideoUser" className='Link'>
            <Nav.Link href="/ComponetVideoUser">videos</Nav.Link>
						</Link>	
            <Link to="/NotificationUser" className='Link'>
            <Nav.Link href="/NotificationUser">notificaciones</Nav.Link>
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
            <Nav.Link href="/SettingsUser">ajustes</Nav.Link>
            <Nav.Link href="/ComponetVideoUser">videos</Nav.Link>
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

export default NavbarUserComponent;

