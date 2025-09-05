import { useState } from "react";

function StateDemo() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    border: "2px solid red",
    padding: "20px",
    maxWidth: "300px",
    margin: "20px auto",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#ffe6e6",
  };

  const countStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#900000",
  };

  const buttonStyle = {
    margin: "5px",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: "#c70000" }}>State Demo</h2>
      <p style={countStyle}>Current count: {count}</p>
      <button
        style={{ ...buttonStyle, backgroundColor: "#28a745" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ ...buttonStyle, backgroundColor: "#007bff" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}

export default StateDemo;
