import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../../scss/components/landing/_input.scss';

import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa';



function InputHero() {
  return (
    <>
    <div className='input-nav' style={{borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>
      <InputGroup    id="input"  className="mb-3">
        <Form.Control id='form-imput'
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        <FaTwitter/>
        </Button>
      </InputGroup>
      
      </div>

      

    </>
  );
}

export default InputHero;