import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, resetData } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

const handleIncrement=()=>{
  dispatch(increment())

}
const handleDecrement=()=>{
  dispatch(decrement())

}
const handleReset=()=>{
  dispatch(resetData());
}

  return (
    <div>
      <h3> Redux Toolkit in React</h3>
      <button onClick={handleIncrement}>+</button>
      <p>Count:{count}</p>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  );
}

export default App;
