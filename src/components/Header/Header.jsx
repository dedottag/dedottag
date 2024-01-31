import "./header.scss";
// import { useState, useEffect } from "react";
import sunIcon from "../IconsList/icons/sunIcon.svg";
import moonIcon from "../IconsList/icons/moonIcon.svg";

const Header = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prevState) => !prevState);
  // };

  // useEffect(() => {
  //   const storedIsDarkMode = localStorage.getItem("isDarkMode") === "true";
  //   setIsDarkMode(storedIsDarkMode);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("isDarkMode", isDarkMode);
  //   setDark(isDarkMode);
  // }, [isDarkMode]);

  return (
    <header className={`header-container`}>
      <h2>dedottag</h2>
      <img className="moon" src={moonIcon} alt="icon" />
      <img className="sun" src={sunIcon} alt="icon" />
    </header>
  );
};

export default Header;
