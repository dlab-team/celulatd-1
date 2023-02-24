import axios from 'axios';

const API_URL = 'http://mi-api.com/contador';

export async function sendCounterValue(nombre, valor) {
  
      try {

    const response = await axios.post(API_URL, { nombre, valor });
    console.log(response.data);
  } catch (error) {
    console.error(error);
    
  }
}

