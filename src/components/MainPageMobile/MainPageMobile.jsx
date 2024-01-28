import "./main-page-mobile.scss";
import LogoCat from "../images/LogoCat.jpg";
import IkonsList from "../IconsList/IconsList";

const MainPageMobile = ({ dark }) => {
  return (
    <div className="main-page-mobile-container">
      <div className={`data-mobile-container ${dark ? "main-dark" : ""}`}>
        <div className="data-mobile-header">
          <img className="logo-cat-mobile" src={LogoCat} alt="logo" />
          <h1>Ибрагим Юсупов</h1>
          <span>Фронтенд разработчик (кажется)</span>
        </div>
        <ul className="data-ul">
          <li className="my-data">
            chponga@mail.ru <br />
            <span>Электронная почта</span>
          </li>
          <li className="my-data">
            +7(999) 127-27-72 <br />
            <span>Номер телефона</span>
          </li>
          <li className="my-data">
            02 Августа 1999 <br />
            <span>Дата рождения</span>
          </li>
        </ul>
        <div className="data-footer">
          <IkonsList dark={dark} />
          @Dedottag
        </div>
      </div>
      <div className={`about-me-mobile-container ${dark ? "main-dark" : ""}`}>
        <div className={`me-mobile-header ${dark ? "me-header-dark" : ""}`}>
          <h2>коротко обо мне</h2>
        </div>
        <div className="history">
          Окончил университет по специальности Электроэнергетика и
          электротехника, работал в электроэнергетической компании несколько
          лет. В конце 21го решил сменить сферу деятельности и начал
          самостоятельно изучать frontend. <br />
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

export default MainPageMobile;
