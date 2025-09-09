const HoverCounter = ({ count, increment }) => {
  return (
    <>
      <h3>Hover Counter </h3>
      <p>Count:{count}</p>
      <button onMouseOver={increment}>+</button>
    </>
  );
};

export default HoverCounter;
