import React from "react";
import { useState } from "react";

function UseState() {
  const [name, setName] = useState("Sheikh Bujib");
  const [age , setAge ] = useState (0);

  const updateName = () => {
    setName("Debdas")
  }

  const updateAge = () => {
    setAge(age + 1);

  }

  return (
    <>
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName}>Reaveal Name</button>
    </div>

    <div>
      <p>Age : {age} </p>
      <button onClick={updateAge}>Increment Age</button>
    </div>
    </>
    
    
  );
}

export default UseState;
