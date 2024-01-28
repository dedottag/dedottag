import "./main-page.scss";
import LogoCat from "../images/LogoCat.jpg";
import IkonsList from "../IconsList/IconsList";

const MainPage = ({ dark }) => {
  return (
    <div className={`main-page-container ${dark ? "main-dark" : ""}`}>
      <div className={`data-container ${dark ? "data-dark" : ""}`}>
        <div className="data-header">
          <img className="logo-cat" src={LogoCat} alt="logo" />
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
