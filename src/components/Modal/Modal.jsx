import React from 'react';
import ModalDeck from '../ModalDeck/ModalDeck';
import { svg } from '../deckTendencies/decks';
import ReactDom from 'react-dom';

const Modal = ({ item, closeModal }) => {
  const $div = document.getElementById('modal');
  return ReactDom.createPortal(
    <>
      <div className='modal'>
        <div className='modal__container'>
          <div className='modal__close' onClick={closeModal}>
            {svg}
          </div>
          <div className='modal__div'>
            {item.deckContain.map((deck) => (
              <ModalDeck deck={deck} />
            ))}
          </div>
        </div>
      </div>
    </>,
    $div
  );
};

export default Modal;
