import "./header.scss";
import { useState, useEffect } from "react";

const Header = ({ dark, setDark }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode);

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
      <h1>HEADER</h1>
      <input
        type="checkbox"
        onChange={() => {
          toggleDarkMode();
        }}
        checked={dark}
      />
    </header>
  );
};

export default Header;
