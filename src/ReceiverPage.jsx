import React, { useState } from "react";

function ReceiverPage() {
  const [messages, setMessages] = useState(["Pesan 1", "Pesan 2", "Pesan 3"]);

  const receiveMessage = () => {
    // Simulasi penerimaan pesan dari server atau topik
    setMessages([...messages, `Pesan ${messages.length + 1}`]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Penerima (Receiver)</h1>
      <button onClick={receiveMessage}>Terima Pesan</button>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default ReceiverPage;
