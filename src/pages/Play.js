import { useParams } from "react-router-dom";
import Tablero from "../components/tablero/Tablero";
import useContextApp from "../Store/useContextApp";

const Play = () => {
  const store = useContextApp();
  const params = useParams();
  const { obtenerCarta } = store;
  const { id } = params;
  const carta = obtenerCarta(id);
  return (
    <div>
      <Tablero carta={carta} />
    </div>
  );
};

export default Play;
