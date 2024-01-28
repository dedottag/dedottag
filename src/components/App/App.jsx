import "./App.scss";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MainPageMobile from "../MainPageMobile/MainPageMobile";

function App() {
  return (
    <>
      {/* <Header /> */}
      <div className="App">
        <MainPage />
        <MainPageMobile />
      </div>
    </>
  );
}

export default App;
