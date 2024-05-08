import "./header-buttons.scss";
import { useSelector } from "react-redux";
import { useState } from "react";

const HeaderButtons = ({ skillRef, mainRef, referenceRef, mainRefMob }) => {
  const skillView = useSelector((state) => state.dedottag.skillView);
  const mainView = useSelector((state) => state.dedottag.mainView);
  const referenceView = useSelector((state) => state.dedottag.referenceView);

  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [mobile, setMobile] = useState(window.innerWidth < 900);

  window.addEventListener("resize", () => {
    setMobile(window.innerWidth < 900);
  });

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setTheme(e.matches);
    });

  const desctopStyle = {
    borderBottom: theme ? "2px solid #ffe2b7" : "2px solid rgb(17, 42, 65)",
    color: theme ? "#ffe2b7" : "rgb(17, 42, 65)",
  };

  const mobileStile = {
    borderBottom: "2px solid transparate",
    backgroundColor: theme ? "#845503" : "rgb(17, 42, 65)",
    color: theme ? "rgb(17, 42, 65)" : "#ffe2b7",
  };

  const viewStyle = mobile ? mobileStile : desctopStyle;

  const handleClick = (ref, block) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: block });
  };

  return (
    <div className="buttons-container">
      {/* {classes.map((btn) => (
          <button
            style={btn.style ? viewStyle : null}
            key={btn.name}
            onClick={() => handleClick(skillRef)}
          >
            {btn.name}
          </button>
        ))} */}

      <button
        style={mainView ? viewStyle : null}
        onClick={() =>
          handleClick(
            mobile ? mainRefMob : mainRef,
            mobile ? "start" : "center"
          )
        }
      >
        обо мне
      </button>
      <button
        style={skillView ? viewStyle : null}
        onClick={() => handleClick(skillRef, mobile ? "start" : "center")}
      >
        мои навыки
      </button>
      <button
        style={referenceView ? viewStyle : null}
        onClick={() => handleClick(referenceRef, "start")}
      >
        {mobile ? "примеры работ" : "портфолио"}
      </button>
    </div>
  );
};

export default HeaderButtons;
