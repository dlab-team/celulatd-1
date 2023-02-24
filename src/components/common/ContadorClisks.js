import React, { useState } from "react";
import {sendCounterValue} from '../../services/CounterApi';


function Counter({ icon, nombreContador ,link}) {
  const [contador, setContador] = useState(0);

  const handleClick = async () => {
    setContador(contador + 1);
    await sendCounterValue(nombreContador, contador + 1);
    
  };
  return  (
    <div onClick={() => window.location.href = link}>
    {icon && (
      <div onClick={handleClick}>
        {React.createElement(icon)}
       
      </div>
    )}
  </div>
  );
}

export default Counter;
