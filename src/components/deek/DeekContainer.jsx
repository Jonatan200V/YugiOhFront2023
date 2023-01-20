import useContextApp, { api } from '../../Store/useContextApp';
import './deek.css';
import Card from './Card';
import { useState } from 'react';
const DeekContainer = () => {
  const [deckName, setDeckName] = useState('');
  const store = useContextApp();
  const { cartas, deek, agregarDeck, eliminarCartasDeck } = store;
  const handleClick = (e) => {
    const target = e.target;
    agregarDeck(target.alt);
  };
  const handleDelete = (idCard, id) => {
    eliminarCartasDeck(idCard, id);
  };
  const spell = deek.filter((count) => count?.attribute === 'Spell');
  const tramp = deek.filter((count) => count?.attribute === 'Trampa');
  const monster = deek.filter((count) => count?.monstruo);

  const createDeck = async () => {
    const arrayImages = deek.map((card) => card.image);
    console.log(arrayImages);
    try {
      const res = await fetch(`${api}/api/deck`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          images: arrayImages,
          name: deckName,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container__deek'>
      <div className='container__listcarddeek'>
        <div className='container__maindeek'>
          <div className='container__left'>
            {deek?.map((card) => (
              <img
                src={card.image}
                alt={card.id}
                key={crypto.randomUUID()}
                className='container__left-img'
                onClick={() => handleDelete(card.idCard, card.id)}
              />
            ))}
          </div>
          <div className='container__right'>
            {cartas?.map((card) => (
              <Card card={card} handleClick={handleClick} key={card.id} />
            ))}
          </div>
        </div>
        <div className='container__contadorcards'>
          <span className='contador__cartas'>
            Cantidad de Cartas: {deek.length}
          </span>{' '}
          <span className='contador__magias'>Magicas: {spell.length}</span>{' '}
          <span className='contador__trampas'>Trampas: {tramp.length}</span>{' '}
          <span className='contador__monstruos'>
            Monstruos:{monster.length}
          </span>
          <button className='deck__button-create' onClick={createDeck}>
            Crear Deck
          </button>
          <input
            type='text'
            className='deck__name'
            placeholder='Nombre del deck'
            onChange={(evt) => setDeckName(evt.currentTarget.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DeekContainer;
