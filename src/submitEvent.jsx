import  { useState } from "react";

function SubmitEvent() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)} 
      /><br/><br/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitEvent;
