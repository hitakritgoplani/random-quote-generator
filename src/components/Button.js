import React from "react";
import "../styles/Button.css";

export default function Button({ onClick }) {
  return (
      <button className="click-button" onClick={onClick}>
        Generate Quote
      </button>
  );
}
