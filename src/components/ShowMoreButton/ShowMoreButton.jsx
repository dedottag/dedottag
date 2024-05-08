import "./show-more-button.scss";
import { useEffect, useMemo, useRef } from "react";
import { addMoreButtonView } from "../store/dedottagReduser";
import { useDispatch, useSelector } from "react-redux";

const ShowMoreButton = () => {
  const dispatch = useDispatch();
  const targetRef = useRef(null);

  const buttonView = useSelector((state) => state.dedottag.showMoreButtonView);
  //   console.log(view);

  const viewStyle = {
    width: "300px",
    opacity: "1",
    transition: "0.3s",
  };

  const pStyle = {
    opacity: "1",
    transition: "2s",
  };

  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]

    dispatch(addMoreButtonView(entry.isIntersecting));
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, options]);

  return (
    <button
      style={buttonView ? viewStyle : null}
      ref={targetRef}
      className="show-more-button"
    >
      <a
        style={buttonView ? pStyle : null}
        href="https://github.com/dedottag"
        target="blank"
      >
        {buttonView ? "Смотреть больше на github" : ""}
      </a>
    </button>
  );
};

export default ShowMoreButton;
