import "./App.scss";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MainPageMobile from "../MainPageMobile/MainPageMobile";

import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const body = document.getElementById("body");
  body.style.backgroundColor = dark ? "rgb(17, 42, 65)" : "";

  return (
    <div className="App">
      <Header dark={dark} setDark={setDark} />
      <MainPage dark={dark} />
      <MainPageMobile dark={dark} />
    </div>
  );
}

export default App;
