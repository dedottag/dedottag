import "./App.scss";
import Header from "../Header";
import { useState } from "react";
import Fireplace from "../Fireplace";

function App() {
  const [checked, setCheked] = useState(false);

  if (checked) {
    document.getElementsByTagName("body")[0].style.background =
      "rgba(0, 0, 0, 0.754";
  } else {
    document.getElementsByTagName("body")[0].style.background = "white";
  }

  return (
    <div className="App">
      <Header checked={checked} setCheked={setCheked} />
      <Fireplace checked={checked} />
    </div>
  );
}

export default App;
