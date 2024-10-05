// src/components/Sender.jsx
import React, { useState } from "react";

function Sender() {
  const [response, setResponse] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);
  const [rpcInput, setRpcInput] = useState(""); // Input untuk RPC
  const [selectedModel, setSelectedModel] = useState("request-response");

  const handleRequestResponse = (input) => {
    setResponse(`Response from Request-Response model with input: ${input}`);
  };

  const handlePublishSubscribe = (input) => {
    const newMessage = input || `Message ${receivedMessages.length + 1}`;
    setReceivedMessages([...receivedMessages, newMessage]);
  };

  const handleMessagePassing = () => {
    if (message) {
      setSentMessages([...sentMessages, message]);
      setMessage("");
    }
  };

  // Logika untuk RPC
  const handleRPC = () => {
    setResponse(`Response from RPC model with input: ${rpcInput}`);
    setRpcInput(""); // Reset input setelah diproses
  };

  const renderModel = () => {
    switch (selectedModel) {
      case "request-response":
        return (
          <div>
            <h2>Request-Response Model</h2>
            <input
              type="text"
              placeholder="Enter request"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => handleRequestResponse(message)}>
              Send Request
            </button>
            <div className="response">{`Response: ${response}`}</div>
          </div>
        );

      case "publish-subscribe":
        return (
          <div>
            <h2>Publish-Subscribe Model</h2>
            <input
              type="text"
              placeholder="Enter message to publish"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => handlePublishSubscribe(message)}>
              Publish Message
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
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
            />
            <button onClick={handleMessagePassing}>Send Message</button>
            <div className="sent-messages">
              <h3>Sent Messages:</h3>
              <ul>
                {sentMessages.map((msg, index) => (
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
            <input
              type="text"
              value={rpcInput}
              onChange={(e) => setRpcInput(e.target.value)}
              placeholder="Enter RPC input"
            />
            <button onClick={handleRPC}>Call RPC</button>
            <div className="response">{`Response: ${response}`}</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1>Communication Models Simulation</h1>
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

export default Sender;
