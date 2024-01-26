import "./main-page.scss";
import LogoCat from "../images/LogoCat.jpg";

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="data-container">
        <div className="data-header">
          <img className="logo-cat" src={LogoCat} alt="logo" />
          <h1 className="name">Ибрагим Юсупов</h1>
        </div>
        <div className="data-body"></div>
      </div>
    </div>
  );
};

export default MainPage;
