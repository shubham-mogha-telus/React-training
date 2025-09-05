
function HelloWorld() {
  const style = {
    color: "#ff4500",
    backgroundColor: "#fff3e0",
    padding: "30px",
    border: "2px solid #ff6347",
    borderRadius: "15px",
    fontFamily: "Arial, sans-serif",
    fontSize: "36px",
    boxShadow: "2px 2px 12px rgba(0,0,0,0.2)",
    margin: "20px auto",
    textAlign: "center",
    animation: "pulse 2s infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
      <h1 style={style}>Hello, World! 👋</h1>
    </>
  );
}

export default HelloWorld;
