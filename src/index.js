import React from "react";
import ReactDOM from "react-dom";

const name = "DEVersity";

// render(what to see, where to see)
ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    {
      // Use curly braces to jump out of JSX
    }
    <p>Your lucky number is: {getNumber()} </p>
  </div>,
  document.getElementById("root")
);

function getNumber() {
  if (name === "DEVersity") {
    return Math.floor(Math.random() * 100);
  }
}
