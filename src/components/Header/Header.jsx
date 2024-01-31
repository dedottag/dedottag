import "./header.scss";
import { useState, useEffect } from "react";
import sunIcon from "../IconsList/icons/sunIcon.svg";
import moonIcon from "../IconsList/icons/moonIcon.svg";

const Header = ({ dark, setDark }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const storedIsDarkMode = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(storedIsDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
    setDark(isDarkMode);
  }, [isDarkMode]);

  return (
    <header className={`header-container ${dark ? "header-dark" : ""}`}>
      <h2>dedottag</h2>
      <img
        src={!isDarkMode ? moonIcon : sunIcon}
        alt="icon"
        onClick={() => toggleDarkMode()}
      />
    </header>
  );
};

export default Header;
