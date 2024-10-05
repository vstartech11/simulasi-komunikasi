import React, { useState } from "react";

const MessagePassing = ({ onMessageUpdate }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    setMessages((prevMessages) => [...prevMessages, input]);
    onMessageUpdate(input); // Kirim pesan ke App.jsx
    setInput("");
  };

  return (
    <div>
      <h2>Message Passing Model</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send Message</button>
      <h3>Sent Messages:</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessagePassing;
