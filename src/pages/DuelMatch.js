// import "./match.css";
import { useEffect } from 'react';
import Header from '../components/header/Header';
import useContextApp from '../Store/useContextApp';
import { Link, useParams } from 'react-router-dom';
import { svg } from '../components/deckTendencies/decks';
import Boton from '../components/button/Boton';
// import "./match.css";
const DuelMatch = () => {
  const store = useContextApp();
  const {
    filterCartas,
    filterFavorits,
    mostrarFavorits,
    mostrarCartas,
    obtenerCarta,
  } = store;
  const params = useParams();
  useEffect(() => {
    filterCartas();
    filterFavorits();
  }, []);

  const carta = obtenerCarta(params.id);
  return (
    <div>
      <div>
        <Header />
        <div className='container__modal'>
          <div className='modal__img'>
            {carta?.map((card) => (
              <div className='modal__img-div'>
                <Link to={'/duelos'}>
                  <i className='deck__svg-blue-eyes modal__i'>{svg}</i>
                </Link>
                <img src={card.image} className='modal__img-img' />

                <div className='modal__button'>
                  <Link to={`/jugar/${card.id}`} className='link'>
                    <Boton valor={'Jugar'} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='container__match'>
          <h3>Favoritos</h3>
          <div className='mostarcartas__match'>
            {mostrarFavorits?.map((card) => (
              <div key={card.id}>
                <img src={card.image} className='img__match' id={card.id} />
              </div>
            ))}
          </div>
          <h3>Lista de Monstruos</h3>
          <div className='mostarcartas__match'>
            {mostrarCartas?.map((card) => (
              <div key={card.id}>
                <img src={card.image} className='img__match' id={card.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuelMatch;
