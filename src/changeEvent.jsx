import React, { useState } from "react";

function ChangeEvent() {
  const [name, setName] = useState("");

  return (
    <div>
      <input 
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)} 
      />
      <p>Hello, {name}</p>
    </div>
  );
}

export default ChangeEvent;
