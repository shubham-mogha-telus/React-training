import "./App.css";
import HelloWorldClass from "./components/classComponents/helloWorldClass";
import PropsDemoClass from "./components/classComponents/propsDemoClass";
import StateDemoClass from "./components/classComponents/stateDemoClass";
import HelloWorld from "./components/functionalComponents/helloWorld";
import PropsDemo from "./components/functionalComponents/propsDemo";
import StateDemo from "./components/functionalComponents/stateDemo";



function App() {
  const appStyle = {
    backgroundColor: "#e6e6fa",
    padding: "20px",
  };
  return (
    <div style={appStyle}>
      {/* Rendering Functional Components */}
      <HelloWorld/>
      <PropsDemo name="Shubham" city="New Delhi" />
      <StateDemo />

      {/* Rendering Class Components */}

      {/* <HelloWorldClass/>
      <PropsDemoClass name="Shubham" city="New Delhi"/>
      <StateDemoClass/> */}

    </div>
   
  );
}

export default App;
