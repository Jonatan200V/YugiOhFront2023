import { useNavigate } from "react-router-dom";
import useContextApp from "../../Store/useContextApp";
import Boton from "./Boton";
import "./button.css";
const Button = ({ id, setDescription, description, des }) => {
  const navigate = useNavigate();
  const store = useContextApp();
  const { eliminarCarta, actualizarCarta } = store;
  const handleClickDelete = (e) => {
    eliminarCarta(id);
    navigate("/home");
  };
  const handleClickUpdate = () => {
    if (!description) return setDescription(true);
    actualizarCarta(id, des);
    return setDescription(false);
  };

  return (
    <div className="button__container">
      <Boton valor={"Update"} onClickEvent={handleClickUpdate} />
      <Boton valor={"Delete"} onClickEvent={handleClickDelete} />
    </div>
  );
};

export default Button;
