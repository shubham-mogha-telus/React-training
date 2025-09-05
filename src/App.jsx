import "./App.css";
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
      <HelloWorld/>
      <PropsDemo name="Shubham" city="New Delhi" />
      <StateDemo />
    </div>
   
  );
}

export default App;
