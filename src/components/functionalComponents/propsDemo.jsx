function PropsDemo({ name, city }) {
  const containerStyle = {
    border: "2px solid #4caf50",
    borderRadius: "10px",
    padding: "20px",
    margin: "20px auto",
    backgroundColor: "#e8f5e9",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#2e7d32",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#1b5e20",
    margin: "5px 0",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Props Demo</h2>
      <p style={textStyle}>
        Hello, my name is <strong>{name}</strong>.
      </p>
      <p style={textStyle}>
        I stay in <b>{city}.</b>
      </p>
    </div>
  );
}

export default PropsDemo;
