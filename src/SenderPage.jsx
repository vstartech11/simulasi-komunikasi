import React, { useState } from "react";

function SenderPage() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Simulasi pengiriman pesan ke server atau topik
    console.log("Message Sent: ", message);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pengirim (Sender)</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Masukkan pesan"
      />
      <button onClick={handleSend}>Kirim Pesan</button>
    </div>
  );
}

export default SenderPage;
