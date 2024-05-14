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

  const iframes = [
    {
      src: "https://game-training.vercel.app/",
      tittle: "gameTraining",
      name: "Game Training",
      mobile: true,
    },
    {
      src: "https://image-slider-dusky.vercel.app/",
      tittle: "imageSlider",
      name: "Image Slider",
      mobile: false,
    },
    {
      src: "https://board-henna.vercel.app/",
      tittle: "board",
      name: "Board",
      mobile: true,
    },
    {
      src: "https://cards-gallery.vercel.app/",
      tittle: "cardsGallery",
      name: "Cards Gallery",
      mobile: false,
    },
    {
      src: "https://chart-azure.vercel.app/",
      tittle: "chart",
      name: "Chart",
      mobile: false,
    },
  ];

  const resultIframeArr =
    window.innerWidth > 900
      ? iframes
      : iframes.filter((iframe) => !iframe.mobile);

  return (
    <>
      <h1 className="reference-tittle">Некоторые работы</h1>
      <div className="references-container" ref={referenceRef}>
        {resultIframeArr.map((iframe) => (
          <div className="iframe-container" key={iframe.src}>
            <iframe src={iframe.src} title={iframe.tittle}></iframe>
            <h2>
              <a href={iframe.src} target="blank">
                {iframe.name}
              </a>
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default References;
