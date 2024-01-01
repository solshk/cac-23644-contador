import React, {useState} from "react";

export default function Contador() {

    const [actualizar, setActualizar] = useState(0);
   
  return (
    <div className='contador'>
      <button onClick={() => setActualizar(Number(actualizar) + 1)} className='btn'><i className="fa-solid fa-chevron-up"></i></button>
        <input onChange={setActualizar} className='numero-input' type="number" value={actualizar} />
        <button onClick={() => setActualizar(Number(actualizar) - 1)} className='btn'><i className="fa-solid fa-chevron-down"></i></button>
    </div>
  )
}
