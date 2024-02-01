import "./main-page.scss";
import LogoCat from "../images/LogoCat.jpg";
import IkonsList from "../IconsList/IconsList";

import { useState } from "react";

const MainPage = ({ dark }) => {
  const [cat, setCat] = useState(LogoCat);

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
    <div className={`main-page-container ${dark ? "main-dark" : ""}`}>
      <div className={`data-container ${dark ? "data-dark" : ""}`}>
        <div className="data-header">
          <img
            className="logo-cat"
            src={cat}
            alt="logo"
            onClick={() => getCat()}
          />
          <h1 className="name">
            Ибрагим Юсупов <span>Фронтенд разработчик (кажется)</span>
          </h1>
        </div>
        <div className="data-body">
          <ul className="data-ul">
            <li className="my-data">
              <span>Электронная почта:</span> chponga@mail.ru
            </li>
            <li className="my-data">
              <span>Номер телефона:</span> +7(999) 127-27-72
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
          электротехника, работал в электроэнергетической компании несколько
          лет. В конце 21го решил сменить сферу деятельности и начал
          самостоятельно изучать frontend.
          <br />
          <span>
            Есть некоторое количество самостоятельных проектов различной
            сложности. Хочу улучшить свои имеющиеся навыки а также обучиться
            новому в этом направлении.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
