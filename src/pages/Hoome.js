import Cartas from "../components/cartas/Cartas";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Hoome = () => {
  return (
    <div className="container__hoome">
      <Header />
      <Cartas />
      <Footer />
    </div>
  );
};

export default Hoome;
