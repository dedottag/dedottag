import "./main-page-mobile.scss";
import LogoCat from "../images/LogoCat.jpg";
import IkonsList from "../IconsList/IconsList";

const MainPageMobile = () => {
  return (
    <div className="main-page-mobile-container">
      <div className="data-mobile-container">
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
          <IkonsList />
          @Dedottag
        </div>
      </div>
      <div className="about-me-mobile-container"></div>
    </div>
  );
};

export default MainPageMobile;
