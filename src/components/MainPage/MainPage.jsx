import "./main-page.scss";
import LogoCat from "../images/LogoCat.jpg";
import IkonsList from "../IconsList/IconsList";
import { useDispatch } from "react-redux";
import { mainViewAction } from "../store/dedottagReduser";

import { useEffect, useState, useMemo } from "react";

export function copyToClickBord(text) {
  const copy = document.querySelector(".mail-copy-container");
  copy.style.display = "table";
  if (text.target.textContent === "chponga@mail.ru") {
    copy.textContent = "Почтовый адрес скопирован";
  } else {
    copy.textContent = "Номер телефона скопирован";
  }
  setTimeout(() => {
    copy.style.display = "none";
  }, 2000);
  return navigator.clipboard.writeText(text.target.textContent);
}

const MainPage = ({ dark, mainRef }) => {
  const [cat, setCat] = useState(LogoCat);
  const dispatch = useDispatch();
  // const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]

    dispatch(mainViewAction(entry.isIntersecting));
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
    const currentTarget = mainRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [mainRef, options]);

  async function getCat() {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?"
      );
      const responseJson = await response.json();
      if (responseJson) {
        setCat(responseJson[0].url);
      }
    } catch {
      console.log("что-то пошло не так");
    }
  }

  return (
    <div
      className={`main-page-container ${dark ? "main-dark" : ""}`}
      ref={mainRef}
    >
      <div className={`data-container ${dark ? "data-dark" : ""}`}>
        <div className="data-header">
          <img
            className="logo-cat"
            src={cat}
            alt="logo"
            onClick={() => getCat()}
          />
          <h1 className="name">
            Ибрагим Юсупов <span>Фронтенд разработчик</span>
          </h1>
        </div>
        <div className="data-body">
          <ul className="data-ul">
            <li className="my-data">
              <span>Электронная почта:</span>
              <span className="copy-span" onClick={(e) => copyToClickBord(e)}>
                chponga@mail.ru
              </span>
            </li>
            <li className="my-data">
              <span>Номер телефона:</span>
              <span className="copy-span" onClick={(e) => copyToClickBord(e)}>
                +7(999) 127-27-72
              </span>
            </li>
            <li className="my-data">
              <span>Дата рождения:</span> 02 Августа 1999
            </li>
          </ul>
        </div>
        <div className="data-footer">
          <IkonsList dark={dark} />
          <span className="nickname">@Dedottag</span>
        </div>
      </div>
      <div className="about-me-container">
        <div className={`me-header ${dark ? "me-header-dark" : ""}`}>
          <h2>коротко обо мне</h2>
        </div>
        <div className="history">
          Окончил университет по специальности Электроэнергетика и
          электротехника, работал в электроэнергетической компании. В середине
          21го решил сменить сферу деятельности и начал самостоятельно изучать
          frontend.
          <br />
          <span>
            • Активно вкладываюсь в собственное образование и развитие.
            <br />
            • Изучаю новые инструменты разработки и улучшаю имеющиеся навыки в
            этом направлении.
            <br />• Планирую углублять свои знания в javascript для дальнейшего
            расширения своих возможностей в технической сфере.
          </span>
        </div>
      </div>
      <div className="mail-copy-container"></div>
    </div>
  );
};

export default MainPage;
