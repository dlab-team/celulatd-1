import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import '../../../scssWeb/main.css';



function NavbarNotification() {

  return (
    <>

      <div className='navbarvideo'>
        <div className='container-video'>
          <div>
          <Link to="/ListNotifications" className='Link'>
            <Nav.Link href="/ListNotifications"><h2>MENSAJES</h2></Nav.Link>
          </Link>
          </div>
          <div>
          <Link to="/Notification" className='Link'>
            <Nav.Link href="/Notification"><h2>SUBIR MENSAJES</h2></Nav.Link>
          </Link>
          </div>
        </div>
      </div>
    </>
  );

}

export default NavbarNotification;



