import "./App.css";
import Header from "../Header";
import { useState } from "react";

function App() {
  const [checked, setCheked] = useState(false);

  const clas = checked ? "dark-app" : "App";

  return (
    <div className={clas}>
      <Header checked={checked} setCheked={setCheked} />
    </div>
  );
}

export default App;
