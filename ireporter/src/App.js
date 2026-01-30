import { useState } from "react";

export const App=() =>{
  const []=useState();
  const handleBtnClick=()=>{
    alert("Button clicked");
  }
  return (
    <div>
      <button  onClick={handleBtnClick}>
        click it
      </button>
    </div>
  );
}