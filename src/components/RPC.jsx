import React, { useState } from "react";

const RPC = ({ onResultUpdate }) => {
  const [result, setResult] = useState(null);

  const callRemoteProcedure = async () => {
    const simulatedResult = await new Promise((resolve) => {
      setTimeout(() => resolve("Result from Remote Procedure Call!"), 1000);
    });
    setResult(simulatedResult);
    onResultUpdate(simulatedResult); // Kirim hasil ke App.jsx
  };

  return (
    <div>
      <h2>Remote Procedure Call (RPC) Model</h2>
      <button onClick={callRemoteProcedure}>Call Remote Procedure</button>
      {result && <p>Result: {result}</p>}
    </div>
  );
};

export default RPC;
