import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCodeGenrator() {
  const [qrCode, setQrcode] = useState("");
  const [input, setInput] = useState("");
  function handleGenerateQrCode() {
    setQrcode(input);
    setInput('')
  }
  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type=""
          name="qr-code"
          placeholder="Enter your value year"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
}
