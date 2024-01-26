import "./main-page.scss";
import LogoCat from "../images/LogoCat.jpg";
import IkonsList from "../IconsList/IconsList";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="data-container">
        <div className="data-header">
          <img className="logo-cat" src={LogoCat} alt="logo" />
          <h1 className="name">
            Ибрагим Юсупов <span>Фронтенд разработчик (кажется)</span>
          </h1>
        </div>
        <div className="data-body">
          <ul className="data-ul">
            <li className="my-data">Электронная почта: chponga@mail.ru</li>
            <li className="my-data">Номер телефона: +7(999) 127-27-72</li>
            <li className="my-data">Дата рождения: 02 Августа 1999</li>
          </ul>
        </div>
        <div className="data-footer">
          <IkonsList />
          <span className="nickname">@Dedottag</span>
        </div>
      </div>
      <div className="about-me-container">
        <div className="me-header">
          <h1>коротко обо мне</h1>
        </div>
        <div className="history">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          explicabo nesciunt eum harum, est laboriosam. Repudiandae, sit facilis
          reprehenderit dolore nam ipsum unde cumque eligendi consequuntur, enim
          sapiente ratione ea. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Atque recusandae voluptas quae quibusdam ab
          repudiandae eligendi harum neque aut sint qui voluptatem omnis error,
          nulla cupiditate quaerat quo quas minus.
        </div>
      </div>
    </div>
  );
};

export default MainPage;
