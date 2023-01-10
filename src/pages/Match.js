import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import useContextApp from "../Store/useContextApp";
import "./match.css";
const Match = () => {
  const store = useContextApp();
  const { filterCartas, filterFavorits, mostrarFavorits, mostrarCartas } =
    store;

  useEffect(() => {
    filterCartas();
    filterFavorits();
  }, []);

  return (
    <div>
      <Header />
      <div className="container__match">
        <h3>Favoritos</h3>
        <div className="mostarcartas__match">
          {mostrarFavorits?.map((card) => (
            <div key={card.id}>
              <Link to={`/duelos/${card.id}`}>
                <img src={card.image} className="img__match" id={card.id} />
              </Link>
            </div>
          ))}
        </div>
        <h3>Lista de Monstruos</h3>
        <div className="mostarcartas__match-bottom">
          {mostrarCartas?.map((card) => (
            <div key={card.id}>
              <Link to={`/duelos/${card.id}`}>
                <img src={card.image} className="img__match" id={card.id} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Match;
