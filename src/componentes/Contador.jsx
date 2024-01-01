import React, {useState} from "react";

export default function Contador() {

  const [actualizar, setActualizar] = useState(0);
  
  const sumar = () => { 
    setActualizar(Number(actualizar) + 1);
  }

  const restar = () => {
    setActualizar(Number(actualizar) - 1);
  }

  const reset = () => {
    setActualizar(0);
  }
   
  return (
    <div className='contador'>

      <h3 className='numero-input'>{actualizar}</h3>

      <div className="btn-group">
        <button onClick={sumar} className='btn btn-operacion'>+</button>
        <button onClick={restar} className='btn btn-operacion'>-</button>
        <button onClick={reset} className='btn btn-reset'>Reset</button>
      </div>
      
    </div>
  )
}