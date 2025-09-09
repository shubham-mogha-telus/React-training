import "./App.css";
import ClickCounter from "./components/clickCounter";
import HoverCounter from "./components/hoverCounter";
import withCounter from "./hoc/withCounter";

const EnhancedClickCounter = withCounter(ClickCounter)
const EnhancedHoverCounter = withCounter(HoverCounter)


function App() {
  return (
    <div>
      <h3> High order Component in React Js</h3>
      <EnhancedClickCounter/>
      <EnhancedHoverCounter/>
    </div>
  );
}

export default App;
