import "./atribute.css";
import Attr from "./Attr";
const Attribute = ({ attribute }) => {
  return (
    <div>
      <span>
        {attribute === "DIOS" ? (
          <Attr img={"../assets/attribute/dios.png"} valor={"DIOS"} />
        ) : attribute === "Dark" ? (
          <Attr img={"../assets/attribute/oscuro.png"} valor={"Dark"} />
        ) : attribute === "Spell" ? (
          <Attr img={"../assets/attribute/magia.png"} valor={"Spell"} />
        ) : attribute === "Trampa" ? (
          <Attr img={"../assets/attribute/trampa.png"} valor={"Trampa"} />
        ) : attribute === "Luz" ? (
          <Attr img={"../assets/attribute/luz.png"} valor={"Luz"} />
        ) : attribute === "Tierra" ? (
          <Attr img={"../assets/attribute/tierra.png"} valor={"Tierra"} />
        ) : attribute === "Viento" ? (
          <Attr img={"../assets/attribute/viento.png"} valor={"Viento"} />
        ) : attribute === "Agua" ? (
          <Attr img={"../assets/attribute/agua.png"} valor={"Agua"} />
        ) : attribute === "Fuego" ? (
          <Attr img={"../assets/attribute/fuego.png"} valor={"Fuego"} />
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default Attribute;
