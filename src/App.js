import "./App.css";
import logo from "./img_537094.png";
import { useState } from "react";

function App() {
  const [speed, setSpeed] = useState("0");
  const [light, setLight] = useState(false);

  let style = {
    width: "500px",
    height: "500px",
    WebkitTransform: `rotate(${speed}deg)`,
    transform: `rotate(${speed}deg)`,
  };

  const styleLight = {
    backgroundColor: "orange",
  };

  return (
    <div className="App">
      dedottag
      <div className="tittle">
        <h1>Вентилятор, чтоб тебе было не так жарко этим летом</h1>
      </div>
      <div className="ventilyator-container">
        <img className="logo" style={style} alt="" src={logo}></img>
      </div>
      <div className="buttons">
        <ul>
          <li>
            <div className="light" style={light ? styleLight : null}>
              light
            </div>
            <button
              className="light"
              onClick={() => {
                setLight(true);
              }}
            ></button>
          </li>
          <li>
            <button
              className="speed3"
              onClick={() => {
                setSpeed(() => "2000");
                console.log(speed);
              }}
            >
              3
            </button>
          </li>
          <li>
            <button
              className="speed2"
              onClick={() => {
                setSpeed(() => "1000");
                console.log(speed);
              }}
            >
              2
            </button>
          </li>
          <li>
            <button
              className="speed1"
              onClick={() => {
                setSpeed(() => "360");
                console.log(speed);
              }}
            >
              1
            </button>
          </li>
          <li>
            <button
              className="speed0"
              onClick={() => {
                setSpeed(() => "0");
                setLight(false);
                console.log(speed);
              }}
            >
              0
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
