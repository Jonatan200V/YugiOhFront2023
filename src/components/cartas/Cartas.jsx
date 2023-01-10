import { useEffect, useState } from 'react';
import useContextApp from '../../Store/useContextApp';
import Boton from '../button/Boton';
import Carta from '../carta/Carta';
// const URL = "https://apiygo.vercel.app";
const URL = 'http://localhost:3600/api/yugioh';

const Cartas = () => {
  const store = useContextApp();
  const { crearCarta, cartas, cartasCop } = store;
  const [value, setValue] = useState({ valor: 0, valor2: 6 });
  let { valor, valor2 } = value;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        return crearCarta(response);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickSuma = () => {
    const Value1 = valor >= cartas.length - 6 ? 0 : valor + 6;
    const rest = 6 - valor2;
    if (valor2 < 6) valor2 = valor2 + rest;
    const Value2 = valor2 >= cartas.length ? 6 : valor2 + 6;
    setValue({ ...value, valor: Value1, valor2: Value2 });
  };
  const handleClickResta = () => {
    const Value1 = valor <= 0 ? cartas.length - 6 : valor - 6;
    const Value2 = valor2 <= 6 ? cartas.length : valor2 - 6;
    if (Value1 < 0) return setValue({ ...value, valor: 0, valor2: Value2 });
    setValue({ ...value, valor: Value1, valor2: Value2 });
  };
  return (
    <div className='cartas'>
      <div className='cartas__container'>
        {cartasCop?.slice(valor, valor2)?.map((carta) => (
          <Carta carta={carta} key={carta.name} />
        ))}
      </div>
      <div className='centrar__button'>
        <div className='button__container'>
          <Boton valor={'Anterior'} onClickEvent={handleClickResta} />
          <Boton valor={'Siguiente'} onClickEvent={handleClickSuma} />
        </div>
      </div>
    </div>
  );
};

export default Cartas;
