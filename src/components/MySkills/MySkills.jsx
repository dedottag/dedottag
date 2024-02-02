import "./my-skills.scss";

import reactIcon from "./skill-icons/raact-icon.svg";

let key = 1;

function iconsRet() {
  let res = [];
  for (let i = 0; i < 20; i++) {
    res.push(reactIcon);
  }
  return res;
}

const MySkills = () => {
  return (
    <div className="my-skills-container">
      <div className="my-skills-header">
        <h1>Что я умею ?</h1>
      </div>
      <div className="icons-container">
        {iconsRet().map((icon) => {
          return <img key={key++} src={icon} alt="" />;
        })}
      </div>
    </div>
  );
};

export default MySkills;
