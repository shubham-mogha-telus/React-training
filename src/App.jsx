


import "./App.css";
import UseEffect from "./Hooks/useEffect";
import UseState from "./Hooks/useState";

function App() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Segoe UI, Arial, sans-serif",
    textAlign: "center",
    background: "#f0f4f8",
    borderRadius: "12px",
  };

  const titleStyle = {
    color: "purple",
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "bold",
  };

  const cardStyle = {
    background: "#fff",
    padding: "20px",
    marginBottom: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const headingStyle = {
    marginBottom: "15px",
    color: "#2980b9",
    fontSize: "22px",
    fontWeight: "600",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}> React Hooks Examples</h1>

      <div style={cardStyle}>
        <h2 style={headingStyle}>1. useState Hook</h2>
        <UseState />
      </div>

       <div style={cardStyle}>
        <h2 style={headingStyle}>2. UseEffect Hook</h2>
        <UseEffect />
      </div>

     
    
    </div>
  );
}

export default App;
