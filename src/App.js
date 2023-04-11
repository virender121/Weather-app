
import { useState } from "react";
import './App.css'
export default function App() {
  const [temp, setTemp] = useState(0);

  function Inc() {
    if (temp === 50) {
      setTemp(50);
    } else {
      setTemp(temp + 5);
    }
  }
  function Dec() {
    setTemp(temp - 5);
  }

  let color;
  if (temp <= -5) {
    color = "skyblue";
  } else if (temp <= 10) {
    color = "blue";
  } else if (temp > 10 && temp <= 20) {
    color = "green";
  } else if (temp > 20 && temp <= 30) {
    color = "yellow";
  } else if (temp > 30 && temp <= 40) {
    color = "orange";
  } else {
    color = "red";
  }
  return (
    <>
      <div
        className="App"
        style={{
          backgroundColor: color,
          width: "400px",
          boxSizing: "border-box",
          border: "5px solid "
        }}
      >
        <h1>what is out like there?</h1>
        <h2>{temp}</h2>
        <h3>Adjust The Tempreture</h3>
        <button
          style={{
            color: color,
            fontWeight: "bolder",
            backgroundColor: "lightgreen"
          }}
          onClick={Inc}
        >
          +5
        </button>
        <button
          style={{
            color: color,
            fontWeight: "bolder",
            backgroundColor: "lightgreen",
            margin: "10px"
          }}
          onClick={Dec}
        >
          {" "}
          -5{" "}
        </button>
      </div>
    </>
  );
}
