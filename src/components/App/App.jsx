import "./App.scss";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MainPageMobile from "../MainPageMobile/MainPageMobile";

import { useState, useEffect } from "react";

function App() {
  const [dark, setDark] = useState(false);

  // const body = document.getElementById("body");
  // body.style.backgroundColor = dark ? "rgb(17, 42, 65)" : "";

  // useEffect(() => {
  //   console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  // }, [window.matchMedia("(prefers-color-scheme: dark)").matches]);

  return (
    <div className="App">
      <Header dark={dark} setDark={setDark} />
      <MainPage dark={dark} />
      <MainPageMobile dark={dark} />
    </div>
  );
}

export default App;
