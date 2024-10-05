// src/components/Receiver.jsx
import React, { useState } from "react";

function Receiver() {
  const [response, setResponse] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [selectedModel, setSelectedModel] = useState("request-response");

  const handleRequestResponse = () => {
    setResponse("Response from Request-Response model");
  };

  const handlePublishSubscribe = () => {
    const newMessage = `Message ${receivedMessages.length + 1}`;
    setReceivedMessages([...receivedMessages, newMessage]);
  };

  const handleMessagePassing = () => {
    // Simulasikan menerima pesan yang baru
    const newMessage = `Message ${receivedMessages.length + 1}`;
    setReceivedMessages([...receivedMessages, newMessage]);
  };

  const handleRPC = () => {
    setResponse("Response from RPC model");
  };

  const renderModel = () => {
    switch (selectedModel) {
      case "request-response":
        return (
          <div>
            <h2>Request-Response Model</h2>
            <button onClick={handleRequestResponse}>Simulate Request</button>
            <div className="response">{`Response: ${response}`}</div>
          </div>
        );

      case "publish-subscribe":
        return (
          <div>
            <h2>Publish-Subscribe Model</h2>
            <button onClick={handlePublishSubscribe}>
              Simulate Message Received
            </button>
            <div className="received-messages">
              <h3>Received Messages:</h3>
              <ul>
                {receivedMessages.map((msg, index) => (
                  <li key={index}>{msg}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "message-passing":
        return (
          <div>
            <h2>Message Passing Model</h2>
            <button onClick={handleMessagePassing}>
              Simulate Message Received
            </button>
            <div className="received-messages">
              <h3>Received Messages:</h3>
              <ul>
                {receivedMessages.map((msg, index) => (
                  <li key={index}>{msg}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "rpc":
        return (
          <div>
            <h2>Remote Procedure Call (RPC) Model</h2>
            <button onClick={handleRPC}>Simulate RPC Call</button>
            <div className="response">{`Response: ${response}`}</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1>Receiver - Communication Models Simulation</h1>
      <label htmlFor="modelSelect">Select Communication Model:</label>
      <select
        id="modelSelect"
        value={selectedModel}
        onChange={(e) => setSelectedModel(e.target.value)}
      >
        <option value="request-response">Request-Response</option>
        <option value="publish-subscribe">Publish-Subscribe</option>
        <option value="message-passing">Message Passing</option>
        <option value="rpc">Remote Procedure Call</option>
      </select>

      {renderModel()}
    </div>
  );
}

export default Receiver;
