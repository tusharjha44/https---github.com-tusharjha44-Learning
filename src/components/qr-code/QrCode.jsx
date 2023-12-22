import React from "react";
import { useState } from "react";
import "./styles.css";
import QRCode from "react-qr-code";

const QrCode = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQrCode = () => {
    setQrCode(input);
    setInput("");
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        name="qr-code"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder="Enter your text here"
      />
      <button
        disabled={input && input.trim() !== "" ? false : true}
        onClick={generateQrCode}
      >
        Generate
      </button>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={400}
          value={qrCode}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          viewBox={"0 0 256 256"}
        />
      </div>
    </div>
  );
};

export default QrCode;
