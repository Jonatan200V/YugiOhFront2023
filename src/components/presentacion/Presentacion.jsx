import "./presentacion.css";
import { Link } from "react-router-dom";
const Presentacion = () => {
  return (
    <div className="presentacion">
      <Link to="/home">
        <img
          src="../assets/mago.jpg"
          alt="YUGIOH"
          className="presentacion__img"
          loading="lazy"
        />
      </Link>
      <div>
        <div className="burbuja">
          <img src="../assets/imageDios.jpg" />
        </div>
        <div className="burbuja">
          <img src="../assets/imageDios2.jpg" />
        </div>
        <div className="burbuja">
          <img src="../assets/imageDios3.jpg" />
        </div>
        <div className="burbuja">
          <img src="../assets/imageDarkMagician.jpg" />
        </div>
        <div className="burbuja">
          <img src="../assets/imageRaigeki.jpg" />
        </div>
        <div className="burbuja">
          <img src="../assets/imageRedEyes.jpg" />
        </div>
        <div className="burbuja">
          <img src="../assets/imageCyberJarra.jpg" />
        </div>
        <div className="burbuja">
          <img src="../assets/imagePotOfGreed.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
