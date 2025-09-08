import { useState, useEffect } from "react";

function UseEffect() {
  const [seconds, setSeconds] = useState(0);

  const buttonStyle = {
    backgroundColor: "lightsteelblue",
    color: "red",
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    margin: "5px",
  };

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>Seconds: {seconds}</h3>
      <button style={buttonStyle} onClick={() => setSeconds(0)}>
        Reset Timer
      </button>
    </div>
  );
}

export default UseEffect;
