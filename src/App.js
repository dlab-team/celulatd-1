import './scss/main.scss';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Counter  from './components/common/ContadorClisks';
import { FaFacebookF,FaTwitter,FaInstagram  } from 'react-icons/fa';
import CarruselCalendario from './components/common/CarruselCalendario';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/landing/Landing';
import Button from './components/common/Button';


function App() {
  return (

    <>

    <Landing/>
    
    
      
    </>


    /* <div className="App">
      <header className="App-header">
       <Login/>
       <Register/>
       <Counter nombreContador = "FacebookF" icon ={FaFacebookF} link= 'https://www.facebook.com/'/>
       <Counter nombreContador = "Twitter" icon ={FaTwitter} link= 'https://twitter.com/?lang=es' />
       <Counter nombreContador = "Instagram" icon ={FaInstagram} link= 'https://www.instagram.com/' />
       <CarruselCalendario/>
      </header>
      <div className="body">
      
    </div>
    </div> */
  );
}

export default App;
