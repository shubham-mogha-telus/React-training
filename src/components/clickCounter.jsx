const ClickCounter = ({ count, increment, decrement, reset }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Click counter:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ClickCounter;
