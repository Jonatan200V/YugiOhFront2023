import { useState } from 'react';
import useContextApp from '../../Store/useContextApp';
import './filter.css';

const Filter = () => {
  const store = useContextApp();
  const [search, setSearch] = useState('');
  const { cartas, filterCards } = store;
  const handleChange = (evt) => {
    const { value } = evt.target;
    const buscar = cartas.filter((card) => {
      return card.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    filterCards(buscar);
    setSearch(value);
  };

  return (
    <input
      value={search}
      onChange={handleChange}
      className='input__filter'
      placeholder='Buscar Cartas'
    />
  );
};

export default Filter;
