import "./App.scss";
import Header from "../Header/Header";
import MainPage from "../MainPage/MainPage";
import MainPageMobile from "../MainPageMobile/MainPageMobile";
import MySkills from "../MySkills/MySkills";
import References from "../References/References";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

import { useRef } from "react";

const App = () => {
  const skillRef = useRef(null);
  const mainRef = useRef(null);
  const referenceRef = useRef(null);
  const mainRefMob = useRef(null);

  return (
    <>
      <Header
        skillRef={skillRef}
        mainRef={mainRef}
        referenceRef={referenceRef}
        mainRefMob={mainRefMob}
      />
      {/* <NavigateButtons /> */}
      <div className="App">
        <MainPage mainRef={mainRef} />
        <MainPageMobile mainRefMob={mainRefMob} />
        <MySkills skillRef={skillRef} />
        <References referenceRef={referenceRef} />
        <ShowMoreButton />
      </div>
    </>
  );
};

export default App;
