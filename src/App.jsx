import "./App.css";
import UsersList from "./components/usersList";

function App() {
  const appStyle = {
    backgroundColor: "#e6e6fa",
    padding: "20px",
  };
  return (
    <div style={appStyle}>
      <UsersList />
    </div>
  );
}

export default App;
