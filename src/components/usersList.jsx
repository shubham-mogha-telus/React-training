import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>Loading...</p>;

  const containerStyle = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "15px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const listItemStyle = {
    backgroundColor: "#e3f2fd",
    margin: "10px 0",
    padding: "12px 15px",
    borderRadius: "8px",
    transition: "transform 0.2s, background-color 0.2s",
    cursor: "pointer",
  };


  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Users List</h2>
      <ul style={listStyle}>
        {users.map((user) => (
          <li
            key={user.id}
            style={listItemStyle}
            
          >
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
