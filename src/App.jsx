import "./App.css";
import ChangeEvent from "./changeEvent";
import ClickEvent from "./clickEvent";
import LoginToggle from "./loginToggle";
import SubmitEvent from "./submitEvent";

function App() {
  const titleStyle = {
    color: "#6a1b9a",
    marginBottom: "30px",
    fontSize: "28px",
    fontWeight: "bold",
  };

  const cardStyle = {
    background: "white",
    padding: "25px",
    marginBottom: "25px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const headingStyle = {
    marginBottom: "15px",
    color: "#e67e22",
    fontSize: "20px",
    fontWeight: "600",
  };

  const inputStyle = {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    margin: "10px 0",
    width: "80%",
    fontSize: "16px",
  };

  return (
    <div>
      <h1 style={titleStyle}> React Event Handling Examples</h1>

      <div style={cardStyle}>
        <h2 style={headingStyle}>Click Event</h2>
        <ClickEvent />
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>Change Event</h2>
        <ChangeEvent inputStyle={inputStyle} />
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>Submit Event</h2>
        <SubmitEvent inputStyle={inputStyle} />
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>Login Toggle Example</h2>
        <LoginToggle/>
      </div>
    </div>
  );
}

export default App;
