import "./App.scss";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MainPageMobile from "../MainPageMobile/MainPageMobile";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <MainPage />
        <MainPageMobile />
      </div>
    </>
  );
}

export default App;
