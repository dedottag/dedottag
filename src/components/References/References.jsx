import "./references.scss";
import { useDispatch } from "react-redux";
import { refenceViewAction } from "../store/dedottagReduser";
import { useEffect, useMemo } from "react";

const References = ({ referenceRef }) => {
  const dispatch = useDispatch();
  //   const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]

    dispatch(refenceViewAction(entry.isIntersecting));
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = referenceRef.current;

    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [referenceRef, options]);

  return (
    <>
      <h1 className="reference-tittle">Некоторые работы</h1>
      <div className="references-container" ref={referenceRef}>
        <div className="iframe-container">
          <iframe
            src="https://game-training.vercel.app/"
            title="gameTraining"
          ></iframe>
          <h2>
            <a href="https://game-training.vercel.app/" target="blank">
              Game Training
            </a>
          </h2>
        </div>
        <div className="iframe-container">
          <iframe
            src="https://image-slider-dusky.vercel.app/"
            title="imageSlider"
          ></iframe>
          <h2>
            <a href="https://image-slider-dusky.vercel.app/" target="blank">
              Image Slider
            </a>
          </h2>
        </div>
        {window.innerWidth > 400 && (
          <div className="iframe-container">
            <iframe
              src="https://board-henna.vercel.app/"
              title="board"
            ></iframe>
            <h2>
              <a href="https://board-henna.vercel.app/" target="blank">
                Board
              </a>
            </h2>
          </div>
        )}
        <div className="iframe-container">
          <iframe
            src="https://cards-gallery.vercel.app/"
            title="cardsGallery"
          ></iframe>
          <h2>
            <a href="https://cards-gallery.vercel.app/" target="blank">
              Cards Gallery
            </a>
          </h2>
        </div>
        <div className="iframe-container">
          <iframe src="https://chart-azure.vercel.app/" title="chart"></iframe>
          <h2>
            <a href="https://chart-azure.vercel.app/" target="blank">
              Chart
            </a>
          </h2>
        </div>
      </div>
    </>
  );
};

export default References;
