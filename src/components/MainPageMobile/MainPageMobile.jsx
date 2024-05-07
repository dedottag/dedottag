import "./main-page-mobile.scss";
import LogoCat from "../images/LogoCat.jpg";
import IkonsList from "../IconsList/IconsList";
import { useDispatch } from "react-redux";
import { mainViewAction } from "../store/dedottagReduser";
import { useEffect, useMemo } from "react";

const MainPageMobile = ({ dark, mainRefMob }) => {
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
    const currentTarget = mainRefMob.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [mainRefMob, options]);

  return (
    <div className="main-page-mobile-container" ref={mainRefMob}>
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
          электротехника, работал в электроэнергетической компании. В середине
          21го решил сменить сферу деятельности и начал самостоятельно изучать
          frontend. <br />
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
    </div>
  );
};

export default MainPageMobile;
