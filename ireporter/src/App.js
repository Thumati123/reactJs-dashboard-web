import { useState } from "react";

export const App=() =>{
  const [number,setNumber]=useState(1);
  const handleBtnClick=()=>{
    setNumber(number+1)
  }
  return (
    <div>
      <button style={{color:"green"}} onClick={handleBtnClick}>
        click it
      </button>
      {number}
    </div>
  );
}