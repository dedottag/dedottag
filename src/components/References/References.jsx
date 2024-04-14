import "./references.scss";

const References = () => {
  return (
    <>
      <h1 className="reference-tittle">Некоторые работы</h1>
      <div className="references-container">
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
