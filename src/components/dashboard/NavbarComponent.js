import { Link, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
						<Nav.Link>inicio</Nav.Link>
						</Link>
						<Link to="/Ajustes" className='Link'>
						<Nav.Link href="/Ajustes">ajustes</Nav.Link>
						</Link>
						<Link to="/Perfil" className='Link'>
						<Nav.Link href="/Perfil">perfil</Nav.Link>
						</Link>
            <Navbar.Brand href="#">Desafios Latam</Navbar.Brand>
						<Link to="/SubirVideo" className='Link'>
						<Nav.Link href="/SubirVideo">subir video</Nav.Link>
						</Link>
						<Link to="/ListarrVideo" className='Link'>
						<Nav.Link href="/ListarrVideo">videos puplicados</Nav.Link>
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
            <Nav.Link href="/Perfil">perfil</Nav.Link>
            <Nav.Link href="/SubirVideo">subir video</Nav.Link>
            <Nav.Link href="/ListarrVideo">videos puplicados</Nav.Link>
            <Nav.Link href="/Notification">notificaciones</Nav.Link>
  
  </Nav>
  <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
    />
    <Button variant="outline-success">Search</Button>
  </Form>
</Offcanvas.Body>
</Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarComponent;

