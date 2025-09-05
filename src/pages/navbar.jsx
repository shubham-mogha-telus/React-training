import { Link } from "react-router-dom";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "#90e0f",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "25px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#03045e",
    fontWeight: "500",
  };
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/contact" style={linkStyle}>
        Contact
      </Link>
      <Link to="/services" style={linkStyle}>
        Services
      </Link>
      <Link to="/profile" style={linkStyle}>
        Profile
      </Link>
    </nav>
  );
};
export default NavBar;
