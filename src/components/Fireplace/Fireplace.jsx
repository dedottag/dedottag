import "./Fireplace.scss";
import { useState } from "react";

import Kamin from "./камин.png";
import Kamin2 from "./heater_PNG35.png";

const Fireplace = ({ checked }) => {
  const [count, setCount] = useState(true);

  const style = {
    color: "white",
  };

  return (
    <div className="fireplase-container" style={checked ? style : null}>
      <h1>Камин, чтобы тебе было не так холодно этой осенью</h1>
      <div className="img-container">
        <img className="kamin" src={count ? Kamin : Kamin2} alt="камин" />
      </div>
      <div className="add-kamin">
        <div onClick={() => setCount(!count)}>другой обогреватель</div>
      </div>
    </div>
  );
};
export default Fireplace;
