import "./header.scss";
// import { useState, useEffect } from "react";
import sunIcon from "../IconsList/icons/sunIcon.svg";
import moonIcon from "../IconsList/icons/moonIcon.svg";
import HeaderButtons from "../HeaderButtons/HeaderButtons";

const Header = ({ skillRef, referenceRef, mainRef, mainRefMob }) => {
  return (
    <header className="header-container">
      <h2>dedottag</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <HeaderButtons
          skillRef={skillRef}
          referenceRef={referenceRef}
          mainRef={mainRef}
          mainRefMob={mainRefMob}
        />
        <img className="moon" src={moonIcon} alt="icon" />
        <img className="sun" src={sunIcon} alt="icon" />
      </div>
    </header>
  );
};

export default Header;
