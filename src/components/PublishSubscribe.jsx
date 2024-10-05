import React, { useEffect, useState } from "react";

const PublishSubscribe = ({ onMessageUpdate }) => {
  const [messages, setMessages] = useState([]);

  const publishMessage = () => {
    const newMessage = `Message ${messages.length + 1}`;
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    onMessageUpdate(newMessage); // Kirim pesan ke App.jsx
  };

  useEffect(() => {
    const interval = setInterval(() => {
      publishMessage();
    }, 2000);

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <div>
      <h2>Publish-Subscribe Model</h2>
      <button onClick={publishMessage}>Publish Message</button>
      <h3>Received Messages:</h3>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default PublishSubscribe;
