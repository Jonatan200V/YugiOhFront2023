import { useContext, createContext, useState } from 'react';
import Cartas from '../components/cartas/Cartas';

const ContextApp = createContext({
  cartas: [],
  cartasCop: [],
  deek: [],
  favorits: [],
  mostrarFavorits: [],
  mostrarCartas: [],
  crearCarta: (carta) => {},
  obtenerCarta: (id) => {},
  actualizarCarta: (carta) => {},
  eliminarCarta: (id) => {},
  filterCards: () => {},
  agregarDeck: () => {},
  eliminarCartasDeck: () => {},
  addFavorits: () => {},
  deleteFavorits: () => {},
  filterFavorits: () => {},
  filterCartas: () => {},
});
const Store = ({ children }) => {
  const [cartas, setCartas] = useState([]);
  const [cartasCop, setCartasCop] = useState();
  const [deek, setDeek] = useState([]);
  const [favorits, setFavorits] = useState([]);
  const [mostrarFavorits, setMostrarFavorits] = useState([]);
  const [mostrarCartas, setMostrarCartas] = useState([]);
  const crearCarta = (carta) => {
    if (cartas.length <= 0) {
      setCartasCop(carta);
      return setCartas([...cartas, ...carta]);
    }
    return cartas;
  };
  const obtenerCarta = (id) => {
    const item = cartas.filter((car) => car.id === id);
    return item;
  };
  const actualizarCarta = (id, value) => {
    const temp = [...cartas];
    let card = temp.filter((car) => car.id === id);
    card[0].description = value;
    setCartas(temp);
  };
  const eliminarCarta = (id) => {
    const cartasRestantes = cartas.filter((card) => card.id !== id);
    console.log(id);
    return setCartas([...cartasRestantes]);
  };
  const filterCards = (value) => {
    setCartasCop([...value]);
  };
  const agregarDeck = (id) => {
    let open = true;
    let oneCardList = true;
    const newCards = [...deek];
    const Card = cartas.find((car) => car.id === id);
    const CARD = {
      ...Card,
    };
    newCards.forEach((card) => {
      if (card.name === CARD.name) {
        if (card?.count >= 3 && oneCardList) {
          open = false;
          return;
        }
        if (card?.count < 3) {
          card.count = card.count + 1;
          CARD.count = card.count;
          oneCardList = false;
        }
      }
    });
    if (!open) {
      return;
    }
    if (!CARD.hasOwnProperty('count')) {
      CARD.count = 1;
      CARD.idCard = crypto.randomUUID();
      setDeek([...newCards, CARD]);
    }
    console.log(open);

    let newCard = {
      ...CARD,
      idCard: crypto.randomUUID(),
    };
    setDeek([...newCards, newCard]);
  };
  const eliminarCartasDeck = (idCard, id) => {
    const newDeck = deek.filter((item) => item.idCard !== idCard);
    newDeck.forEach((card) => {
      if (card.id === id) {
        card.count = card.count - 1;
      }
    });
    setDeek([...newDeck]);
  };
  const addFavorits = (id) => {
    const verifi = favorits.filter((exist) => exist.id === id);
    if (verifi.length > 0) return console.log('Nose puede volver a agregar');
    const nuevaCard = cartas.filter((card) => card.id === id);
    return setFavorits([...favorits, ...nuevaCard]);
  };
  const deleteFavorits = (id) => {
    const cartasRestantes = favorits.filter((card) => card.id !== id);
    setFavorits(cartasRestantes);
  };
  const filterFavorits = () => {
    const monster = favorits.filter((card) => card?.attribute !== 'Spell');
    const monstruos = monster.filter((mons) => mons?.attribute !== 'Trampa');
    setMostrarFavorits([...monstruos]);
  };
  const filterCartas = () => {
    const monster = cartas.filter((card) => card?.attribute !== 'Spell');
    const monstruos = monster.filter((mons) => mons?.attribute !== 'Trampa');
    setMostrarCartas([...monstruos]);
  };
  return (
    <ContextApp.Provider
      value={{
        cartas,
        cartasCop,
        deek,
        favorits,
        mostrarFavorits,
        mostrarCartas,
        crearCarta,
        obtenerCarta,
        actualizarCarta,
        eliminarCarta,
        filterCards,
        agregarDeck,
        eliminarCartasDeck,
        addFavorits,
        deleteFavorits,
        filterFavorits,
        filterCartas,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};

const useContextApp = () => {
  return useContext(ContextApp);
};
export { Store };
export default useContextApp;
