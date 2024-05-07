import "./navigate-buttons.scss";

const NavigateButtons = () => {
  return (
    <div className="navigate-buttons-container">
      {window.innerWidth < 900 && (
        <>
          <button>обо мне</button>
          <button>навыки</button>
          <button>портфолио</button>
        </>
      )}
    </div>
  );
};

export default NavigateButtons;
