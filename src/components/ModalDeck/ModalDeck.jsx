import React from 'react';

const ModalDeck = ({ deck }) => {
  return (
    <img src={deck} alt={deck} key={deck} className='deck__tendencies-img ' />
  );
};

export default ModalDeck;
