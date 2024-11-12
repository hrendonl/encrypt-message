import "./Header.css";
import hclogo from "../../../assets/hcencript.png";

export const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className="container-logo">
          <img className="logo" src={hclogo} alt="logo" />
        </div>
        <button className="button-language">
        <i class="bi bi-globe"></i>
        Español
        </button>
        
      </div>
    </header>
  );
};
