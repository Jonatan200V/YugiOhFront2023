import { useParams } from "react-router-dom";
import Folder from "../components/folder/Folder";
import Header from "../components/header/Header";
import useContextApp from "../Store/useContextApp";

const Description = () => {
  const params = useParams();
  const store = useContextApp();
  const { obtenerCarta } = store;
  const carta = obtenerCarta(params.description);
  return (
    <div>
      <Header />
      {carta?.map((card) => (
        <Folder card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Description;
