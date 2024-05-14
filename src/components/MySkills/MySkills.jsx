import "./my-skills.scss";

import { useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";
import { skillViewAction } from "../store/dedottagReduser";

import reactIcon from "./skill-icons/raact-icon.svg";
import jsIcon from "./skill-icons/js-icon.svg";
import jsxIcon from "./skill-icons/jsx-icon.svg";
import reduxIcon from "./skill-icons/redux-icon.svg";
import tsIcon from "./skill-icons/ts-icon.svg";
import cssIcon from "./skill-icons/css-icon.svg";
import htmlIcon from "./skill-icons/html-icon.svg";
import scssIcon from "./skill-icons/scss-icon.svg";
import gitIcon from "./skill-icons/git-icon.svg";
import sassIcon from "./skill-icons/sass-icon.svg";
import apiIcon from "./skill-icons/api-icon.svg";
import bootstrapIcon from "./skill-icons/bootstrap-icon.svg";
import acyncApiIcon from "./skill-icons/acyncApi-icon.svg";

const MySkills = ({ skillRef }) => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const dispatch = useDispatch();

  // const targetRef = useRef(null); //Создать ссылку на элемент который должен быть виден в окне

  //callbackFunction функция для отслеживания массива элементов которые наблюдаются
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]

    dispatch(skillViewAction(entry.isIntersecting));
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = skillRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [skillRef, options]);

  const scrollContainerToMiddle = (containerRef) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollHeight = container.scrollHeight;
      const clientHeight = container.clientHeight;
      container.scrollTop = (scrollHeight - clientHeight) / 2;
    } else {
      console.error("Container element not found");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      scrollContainerToMiddle(containerRef1);
      scrollContainerToMiddle(containerRef2);
      scrollContainerToMiddle(containerRef3);
    }, 100);
  }, []);

  return (
    <div className="my-skills-container" ref={skillRef}>
      <div className="my-skills-header">
        <h1>Ключевые навыки</h1>
      </div>
      <div className="skill-icons-container">
        <div className="icons-container" ref={containerRef1}>
          <img className="skill-icon" src={jsIcon} alt="" />
          <img className="skill-icon" src={scssIcon} alt="" />
          <img className="skill-icon" src={cssIcon} alt="" />
        </div>
        <div className="iconic">
          <img className="skill-icon" src={htmlIcon} alt="" />
          <img className="skill-icon" src={jsxIcon} alt="" />
        </div>
        <div className="icons-container" ref={containerRef2}>
          <img className="skill-icon" src={sassIcon} alt="" />
          <img className="skill-icon" src={tsIcon} alt="" />
          <img className="skill-icon" src={acyncApiIcon} alt="" />
        </div>
        <div className="iconic">
          <img className="skill-icon" src={reduxIcon} alt="" />
          <img className="skill-icon" src={gitIcon} alt="" />
        </div>
        <div className="icons-container" ref={containerRef3}>
          <img className="skill-icon" src={apiIcon} alt="" />
          <img className="skill-icon" src={reactIcon} alt="" />
          <img className="skill-icon" src={bootstrapIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
