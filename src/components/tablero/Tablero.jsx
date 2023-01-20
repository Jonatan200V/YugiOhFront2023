import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useContextApp from '../../Store/useContextApp';
import Boton from '../button/Boton';
import './tablero.css';
const Tablero = ({ carta }) => {
  const store = useContextApp();
  const { cartas, mostrarCartas } = store;
  // const [result, setResult] = useState("");
  const cardRandom = [
    mostrarCartas[Math.floor(Math.random() * mostrarCartas.length - 2)],
  ];

  const cardRef = useRef();
  const cardRef2 = useRef();
  const refSpan = useRef();
  const handleClick = () => {
    let ataque2 = cardRef2.current.id;
    let ataque = cardRef.current.id;

    cardRef.current.classList.add('ataque');
    cardRef2.current.classList.add('ataque2');
    refSpan.current.classList.remove('loser');
    refSpan.current.classList.remove('winer');
    refSpan.current.classList.remove('empate');
    ataque = ataque.padStart(4, '0');
    ataque2 = ataque2.padStart(4, '0');
    if (ataque < ataque2) {
      // refSpan.current.style.display = "block";
      refSpan.current.classList.add('loser');
      refSpan.current.textContent = 'Derrota';
    } else if (ataque > ataque2) {
      // refSpan.current.style.color = "green";
      refSpan.current.classList.add('winer');
      refSpan.current.textContent = 'Victoria';

      // refSpan.current.style.display = "block";
    } else {
      refSpan.current.classList.add('empate');
      // refSpan.current.style.display = "block";
      refSpan.current.textContent = 'Empate';
    }
  };
  return (
    <div className='tablero'>
      <div className='x'>
        <div className='tablero__right'>
          <div className='tablero__right-carta'>
            {carta?.map((card) => (
              <div>
                <h2 className='tablero__right-p'>{card.name}</h2>
                <img src={card.image} className='tablero__right-img' />
              </div>
            ))}
          </div>
          <div className='tablero__right-descripcion'>
            {carta?.map((card) => (
              <div>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='tablero__left'>
          <div className='tablero__left-tablero'>
            <div className='tablero__left-top'>
              {cardRandom?.map((card) => (
                <img
                  src={card.image}
                  className='tablero__img-random'
                  ref={cardRef2}
                  id={card.atk}
                />
              ))}
            </div>
            <div className='tablero__left-bottom'>
              {carta?.map((card) => (
                <div
                  key={card.id}
                  className='tablero__card'
                  ref={cardRef}
                  id={card.atk}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className='tablero__img'
                  />
                </div>
              ))}
            </div>
          </div>
          <div className='tablero__left-notas'>
            <Boton onClickEvent={handleClick} valor={'Atacar'} />
            <Link to='/duelos' className='link'>
              <Boton valor={'Cartas'} />
            </Link>
          </div>
        </div>
      </div>
      <span className='tablero__span' ref={refSpan}></span>
    </div>
  );
};

export default Tablero;
