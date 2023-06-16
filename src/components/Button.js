import React from "react";
import "../Button.css";

export default function Button() {
  async function getQuote() {
	const response = await fetch('')
  }
  return (
    <div className="click-button-div">
      <button className="click-button" onLoad={getQuote} onClick={getQuote}>
        Generate Quote
      </button>
    </div>
  );
}
