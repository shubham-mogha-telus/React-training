import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const buttonStyle = {
    background: "lightblue",
    color: "red",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "5px",
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increase</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrease</button>
      <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default UseState;