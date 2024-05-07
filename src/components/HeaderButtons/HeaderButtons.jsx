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

  // const refe = useSelector((state) => state.dedottag.skillRef);
  // console.log(skillRef);

  const viewStyle = {
    borderBottom: mobile
      ? "2px solid transparate"
      : theme
      ? "2px solid #ffe2b7"
      : "2px solid rgb(17, 42, 65)",
    color: theme ? "#ffe2b7" : "rgb(17, 42, 65)",
    textDecoration: mobile ? "underline" : "none",
  };

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      setTheme(e.matches);
    });

  // const classes = [
  //   { name: "верх", style: mainView },
  //   { name: "середина", style: skillView },
  //   { name: "низ", style: referenceView },
  // ];

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
        портфолио
      </button>
    </div>
  );
};

export default HeaderButtons;
