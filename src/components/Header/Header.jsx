import "./header.scss";

const Header = ({ dark, setDark }) => {
  return (
    <header className={`header-container ${dark ? "header-dark" : ""}`}>
      <h1>HEADER</h1>
      <input type="checkbox" onChange={() => setDark(!dark)} checked={dark} />
    </header>
  );
};

export default Header;
