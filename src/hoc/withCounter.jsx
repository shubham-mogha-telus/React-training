import { useState } from "react";

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset=()=>setCount(0);

    return <WrappedComponent {...props} count={count} increment={increment} decrement={decrement} reset={reset} />;
  };
};

export default withCounter;
