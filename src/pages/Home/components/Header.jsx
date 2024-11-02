import "./Header.css";
import hclogo from "../../../assets/hcencrypt.png";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="container-logo">
          <img className="logo" src={hclogo} alt="logo" />
        </div>
      </div>
    </header>
  );
};
