import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from "./pages/Description";
import Hoome from "./pages/Hoome";
import { Store } from "./Store/useContextApp";
import ListCard from "./pages/ListCard";
import Cards from "./pages/Cards";
import Home from "./pages/Home";
import Deek from "./pages/Deek";
import DeekTendencies from "./pages/DeekTendencies";
import Favorits from "./pages/Favorits";
import Match from "./pages/Match";
import DuelMatch from "./pages/DuelMatch";
import Play from "./pages/Play";

function App() {
  return (
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Hoome />} />
          <Route path="/cartas/:description" element={<Description />} />
          <Route path="/listcard" element={<ListCard />} />
          <Route path="card" element={<Cards />} />
          <Route path="/deek" element={<Deek />} />
          <Route path="/deek/tendencies" element={<DeekTendencies />} />
          <Route path="/favorits" element={<Favorits />} />
          <Route path="/duelos" element={<Match />} />
          <Route path="/duelos/:id" element={<DuelMatch />} />
          <Route path="/jugar/:id" element={<Play />} />
        </Routes>
      </BrowserRouter>
    </Store>
  );
}

export default App;
