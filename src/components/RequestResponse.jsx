import React, { useState } from "react";

const RequestResponse = ({ onResultUpdate }) => {
  const [response, setResponse] = useState("");

  const handleRequest = async () => {
    const simulatedResponse = await new Promise((resolve) => {
      setTimeout(() => resolve("Response from Request-Response model!"), 1000);
    });
    setResponse(simulatedResponse);
    onResultUpdate(simulatedResponse); // Kirim hasil ke App.jsx
  };

  return (
    <div>
      <h2>Request-Response Model</h2>
      <button onClick={handleRequest}>Send Request</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default RequestResponse;
