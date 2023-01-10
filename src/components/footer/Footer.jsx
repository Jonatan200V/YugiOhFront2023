import "./footer.css";
import { Link } from "react-router-dom";
import { listCard, deek, tendeciaDeek, gitHub, linkedin } from "../header/icon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contenedor__link-footer">
        <Link to="/listcard" className="link__svg" title="Lista de Cartas">
          {listCard}
        </Link>
        <Link to="/deek" className="link__svg-deek" title="Mi Deek">
          {deek}
        </Link>
        <Link
          to="/deek/tendencies"
          className="link__svg-deek-tendencia"
          title="Deeks en Tendencias"
        >
          {tendeciaDeek}
        </Link>
        <Link to="/favorits" className="link__svg" title="Cartas Favoritas">
          {listCard}
        </Link>
        <Link to="/duelos" className="link__svg" title="Duelo">
          <img src={"../assets/icons/sword.png"} alt="Match" />
        </Link>
      </div>
      <div className="footer__redsocial">
        <a
          href="https://github.com/Jonatan200V"
          target={"_blank"}
          className="footer__span"
          title="Github"
        >
          {gitHub}
        </a>
        <a
          href="https://www.linkedin.com/in/jonatan-valdiviezo2205/"
          target={"_blank"}
          className="footer__span"
          title="Linkedin"
        >
          {linkedin}
        </a>
      </div>
    </div>
  );
};

export default Footer;
