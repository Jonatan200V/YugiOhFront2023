import React, { useRef, useState } from 'react';
import { deek } from '../header/icon';
import { blueEyes, deckYgo, deckJaden, deckRed } from './decks';
import './decktendencies.css';
import '../ModalDeck/modal.css';
import Modal from '../Modal/Modal';
import { useEffect } from 'react';
import { api } from '../../Store/useContextApp';
const DeckTendencies = () => {
  let Decks = [
    { deek, Deck: 'Blue Eyes', id: '1', deckContain: blueEyes },
    { deek, Deck: 'Yu Gi Oh', id: '2', deckContain: deckYgo },
    { deek, Deck: 'Deck Hero', id: '3', deckContain: deckJaden },
    { deek, Deck: 'Red Eyes', id: '4', deckContain: deckRed },
  ];
  const [decks, setDecks] = useState(Decks);
  useEffect(() => {
    const getDecks = async () => {
      const res = await fetch(`${api}/api/deck`);
      let data = await res.json();
      const newDate = data.map((deck) => ({
        id: deck.idDeck,
        deckContain: deck.deckContain,
        deek,
        Deck: deck.deckName,
      }));
      setDecks([...decks, ...newDate]);
    };

    getDecks();
  }, []);
  const [deckI, setDeckI] = useState(null);
  const deckRef = useRef();
  const handleClick = (index) => {
    setDeckI(index);
  };
  const closeModal = () => {
    setDeckI(null);
  };
  return (
    <div className='deck__tendencies'>
      <div className='deck__tendencies-deck' ref={deckRef}>
        {decks.map((item, index) => (
          <div className='deck__div-div-div'>
            {index === deckI ? (
              <Modal item={item} closeModal={closeModal} />
            ) : null}
            <div
              key={item.id}
              className='deck__render'
              onClick={() => handleClick(index)}
            >
              <span
                name={item.Deck}
                id={item.id}
                className='deck__item-render-span'
              ></span>
              {item.deek}
              <span className='deck__render-span' name={item.Deck}>
                {item.Deck}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckTendencies;
