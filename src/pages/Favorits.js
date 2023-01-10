import "./favorits.css";
import Header from "../components/header/Header";
import useContextApp from "../Store/useContextApp";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Favorits = () => {
  const store = useContextApp();
  const { favorits } = store;
  return (
    <div>
      <Header />
      <div className="favorits">
        <div className="favorits__container">
          {favorits.length === 0 ? (
            <h1 className="favorits__h1">
              No hay cartas favoritas disponibles
            </h1>
          ) : (
            favorits?.map((card) => (
              <Link to={`/cartas/${card.id}`}>
                <div key={card.id}>
                  <img
                    className="favorits__img"
                    src={card.image}
                    alt={card.name}
                  />
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorits;
